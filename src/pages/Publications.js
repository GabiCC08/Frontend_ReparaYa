import React from 'react';
import SimpleHeader from "../components/SimpleHeader";
import { Form, Input, Select, Upload, Button , message,Col,Row} from "antd";
import { InboxOutlined } from '@ant-design/icons';
import '../styles/Publications.less'
import FIREBASE from "../firebase";
import {Link, useHistory} from 'react-router-dom'
import Routes from '../constants/routes'



const Publications = () => {

    const history = useHistory();

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
        history.push(Routes.PROFILE)
    }

    return(
        <>
            <SimpleHeader/>
            <div className="main-publications" id='publicationForm'>
                <Link to={Routes.PROFILE}><Button type="link">Volver</Button></Link>
                <h1 className='hFrm' style={{textAlign: 'Center',fontsize:'10px'}}>Crea una publicación</h1>
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
                                    <Select className="opcSelect">
                                        <Select.Option value="Ambato">Ambato</Select.Option>
                                        <Select.Option value="Cuenca">Cuenca</Select.Option>
                                        <Select.Option value="Duran">Duran</Select.Option>
                                        <Select.Option value="Esmeraldas">Esmeraldas</Select.Option>
                                        <Select.Option value="Guayaquil">Guayaquil</Select.Option>
                                        <Select.Option value="Loja">Loja</Select.Option>
                                        <Select.Option value="Machala">Machala</Select.Option>
                                        <Select.Option value="Manta">Manta</Select.Option>
                                        <Select.Option value="Portoviejo">Portoviejo</Select.Option>
                                        <Select.Option value="Quito">Quito</Select.Option>
                                        <Select.Option value="Santo Domingo">Santo Domingo</Select.Option>
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
                                    <Select className="opcSelect">
                                        <Select.Option value="Albañileria">Albañilería</Select.Option>
                                        <Select.Option value="Carpinteria">Carpintería</Select.Option>
                                        <Select.Option value="Cerrajeria">Cerrajería</Select.Option>
                                        <Select.Option value="Electricidad">Electricidad</Select.Option>
                                        <Select.Option value="Electrodomésticos">Electrodomésticos</Select.Option>
                                        <Select.Option value="Electronica">Electrónica</Select.Option>
                                        <Select.Option value="Fontaneria">Fontanería</Select.Option>
                                        <Select.Option value="Mecánica">Mecánica</Select.Option>
                                        <Select.Option value="Pintura">Pintura</Select.Option>
                                        <Select.Option value="Radiotecnia">Radiotécnia</Select.Option>
                                        <Select.Option value="Soldadura">Soldadura</Select.Option>
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
                                </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
};
export default Publications;