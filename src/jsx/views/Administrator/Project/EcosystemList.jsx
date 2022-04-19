
const listecosystme = [
    {
        no: 1,
        fullname: 'Cardano',
        shortname: 'Card'
    },{
        no: 2,
        fullname: 'Ethereum',
        shortname: 'ETH'
    },{
        no: 3,
        fullname: 'Binance smart chain',
        shortname: 'BSC'
    },{
        no: 4,
        fullname: 'Polkadot',
        shortname: 'Polk'
    },{
        no: 5,
        fullname: 'Solana',
        shortname: 'Sol'
    },{
        no: 6,
        fullname: 'Near',
        shortname: 'Near'
    },{
        no: 7,
        fullname: 'Avalanche',
        shortname: 'Avax'
    },{
        no: 8,
        fullname: 'Polygon',
        shortname: 'Matic'
    },{
        no: 9,
        fullname: 'Fantom',
        shortname: 'FTM'
    },{
        no: 10,
        fullname: 'Hecochain',
        shortname: 'Heco'
    },{
        no: 11,
        fullname: 'Cosmos',
        shortname: 'Cos'
    },{
        no: 12,
        fullname: 'Terra',
        shortname: 'Ter'
    },{
        no: 13,
        fullname: 'Harmony',
        shortname: 'Ham'
    },

]

const EcosystemList = () => {

return (
        <>
            <div className="card-header d-block d-sm-flex border-0">
                <div>
                    <h4 className="fs-20 text-black">ECOSystem list</h4>
                </div>  
            </div>
            <div className="card-body tab-content p-0">
                <div className="table-responsive">
                    <table className="table shadow-hover card-table">
                    <thead>
                        <tr>
                            <th className="width150">
                                <strong>No</strong>
                            </th>
                            <th>
                                <strong>Name</strong>
                            </th>
                            <th>
                                <strong>Short Name</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listecosystme.map((data, i)=>(
                            <tr>
                                <td>
                                    <span className="bgl-success p-3 d-inline-block">
                                    {i +1}
                                    </span>
                                </td>
                                <td className="font-w500">
                                    {data.fullname}
                                </td>
                                <td className="font-w500">{data.shortname}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default EcosystemList;
