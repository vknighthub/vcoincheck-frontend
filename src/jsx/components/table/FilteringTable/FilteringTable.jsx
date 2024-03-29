import React, { useMemo } from 'react';
import { useFilters, useGlobalFilter, usePagination, useTable } from 'react-table';
import './filtering.css';
import { GlobalFilter } from './GlobalFilter';
import { withTranslation, useTranslation } from "react-i18next";


export const FilteringTable = ({ colunmsfilter, datafilter }) => {
	const { t } = useTranslation();
	const columns = useMemo(() => colunmsfilter, [colunmsfilter])
	const data = useMemo(() => datafilter, [datafilter])
	const tableInstance = useTable({
		columns,
		data,
		initialState: { pageIndex: 0 }
	}, useFilters, useGlobalFilter, usePagination)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		state,
		page,
		gotoPage,
		pageCount,
		pageOptions,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		setGlobalFilter,
	} = tableInstance

	const { globalFilter, pageIndex } = state
	return (
		<>
			<div className="card-body">
				<div className="table-responsive">
					<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} t={t} />
					<table {...getTableProps()} className="table filtering-table table-responsive-lg">
						<thead>
							{headerGroups.map(headerGroup => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map(column => (
										<th {...column.getHeaderProps(
											{
												style: { minWidth: column.minWidth, width: column.width },
											}
										)}>
											{column.render('Header')}
											{column.canFilter ? column.render('Filter') : null}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody {...getTableBodyProps()} className="" >
							{page.map((row) => {
								prepareRow(row)
								return (
									<tr {...row.getRowProps()}>
										{row.cells.map((cell) => {
											return <td {...cell.getCellProps(
												{
													style: {
														minWidth: cell.column.minWidth,
														width: cell.column.width
													},
												}
											)}> {cell.render('Cell')}
											</td>
										})}
									</tr>
								)
							})}
						</tbody>
					</table>
					<div className="d-flex justify-content-between">
						<span>
							{t('page')}{' '}
							<strong>
								{pageIndex + 1} of {pageOptions.length}
							</strong>{''}
						</span>
						<span className="table-index">
							{t('gotopage')} : {' '}
							<input type="number"
								className="ml-2"
								defaultValue={pageIndex + 1}
								onChange={e => {
									const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
									gotoPage(pageNumber)
								}}
							/>
						</span>
					</div>
					<div className="text-center">
						<div className="filter-pagination  mt-3">
							<button className=" previous-button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>

							<button className="previous-button" onClick={() => previousPage()} disabled={!canPreviousPage}>
								{t('previouspage')}
							</button>
							<button className="next-button" onClick={() => nextPage()} disabled={!canNextPage}>
								{t('nextpage')}
							</button>
							<button className=" next-button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)

}
export default withTranslation()(FilteringTable);