import React, { useState } from 'react';
//Images
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { isAdmin, isAuthenticated } from '../../../store/selectors/AuthSelectors';
import { Modal, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });



const FileDetails = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: 'rc-upload-1661854380225-12',
      name: 'Polkadot',
      status: 'done',
      url: 'https://api.vcoincheck.io/project/image/polkadot.svg',
    },
    {
      uid: 'rc-upload-1661854380225-13',
      name: 'Solana',
      status: 'done',
      url: 'https://api.vcoincheck.io/project/image/solana.svg',
    },
    {
      uid: 'rc-upload-1661854380225-14',
      name: 'Dai',
      status: 'done',
      url: 'https://api.vcoincheck.io/project/image/dai.svg',
    },
    {
      uid: 'rc-upload-1661854380225-15',
      name: 'Uniswap',
      status: 'done',
      url: 'https://api.vcoincheck.io/project/image/uniswap.svg',
    }
  ]);
console.log(fileList)

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <>
      <Upload
        action="https://run.mocky.io/v3/b3e60166-04b5-4dc6-b2ba-a88b3ec3b854"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        showUploadList={{ showRemoveIcon: false }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
    isadmin: isAdmin(state)
  };
};
export default withTranslation()(connect(mapStateToProps, null)(FileDetails));