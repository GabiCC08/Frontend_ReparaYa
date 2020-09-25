import React from 'react';
import SimpleHeader from "../components/SimpleHeader";
import { Form, Input, Select, Upload, Button , message,Col,Row} from "antd";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import Routes from "../constants/routes";
import {Link} from "react-router-dom";
import '../styles/Publications.less'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons/lib';
import FIREBASE from "../firebase";


const Publications = () => {

    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const handleSubmit  = async (values) =>{
        console.log('formulario de publicacion', values);
        const image = values.photo[0].originFileObj;

        const uploadSnapshot = await FIREBASE.storage.ref('publication/' + values.photo[0].name + '_ ' + Date.now()).put(image);
        const imageURL = await uploadSnapshot.ref.getDownloadURL();
        console.log(imageURL);

        console.log('datos de la base de Datos')
        await FIREBASE.db.ref('publicaciones').push({...values,photo: imageURL});
        message.success('Los datos se guardaron correctamente');
    }

    return(
        <>
            <SimpleHeader/>
            <div className="main-publications" id='publications'>
                <h1 id='hFrm' style={{textAlign: 'Center',fontsize:'10px'}}>Crea una publicación</h1>
                <Form
                    name='publications-form'
                    onFinish={handleSubmit}
                >
                    <Row>
                        <Col span={12} style={{margin: 'auto'}}>
                            <Form.Item name={['tittle']} label="Titulo de la publicación"
                                       rules={[{required: true, message: 'Por favor, ingresa un titulo para la publicacion.'}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label='Ciudad'
                                name='city'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'Especifique el Sector'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="quito">Quito</Select.Option>
                                    <Select.Option value="guayaquil">Guayaquil</Select.Option>
                                    <Select.Option value="cuenca">Cuenca</Select.Option>
                                    <Select.Option value="ambato">Ambayo</Select.Option>
                                    <Select.Option value="imbabura">Imbabura</Select.Option>
                                    <Select.Option value="machala">Machala</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label='Area Laboral'
                                name='job_type'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'Escoga el area de trabajo'
                                    }
                                ]}
                            >
                                <Select>
                                    <Select.Option value="mecanico">Mecanico</Select.Option>
                                    <Select.Option value="electricista">Electricista</Select.Option>
                                    <Select.Option value="carpinteria">Carpinteria</Select.Option>
                                    <Select.Option value="plomeria">Plomeria</Select.Option>
                                    <Select.Option value="electrodocmesticos">Electrodomesticos</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label='Detalla tu requerimiento/ oferta laboral: '
                                name='descripcion'
                                rules={ [
                                    {
                                        required: true,
                                        message: 'Porfavor ingresa una pequeña descripcion'
                                    }
                                ]}
                            >
                                <Input.TextArea/>
                            </Form.Item>

                            <Form.Item label="Foto:">
                                <Form.Item name="photo" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                                    <Upload.Dragger name="files" action="/upload.do">
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Click para subir una foto</p>
                                    </Upload.Dragger>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Button  type="primary" htmlType="submit" style={{float: 'rigth'}}>
                                    Registrar
                                </Button>
                                <Link to={Routes.PROFILE}><Button>
                                    Regresar
                                </Button></Link>
                            </Form.Item>

                        </Col>
                    </Row>
                </Form>
            </div>

        </>
    )
};
export default Publications;