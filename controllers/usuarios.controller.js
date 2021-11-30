const {response,request} = require('express');

const usuariosGet=(req=request, res=response) => {
    //tengo el resto de parametros y les asigno un valor por defecto
    // const {nombre='no nombre' ,pagina='1' } = req.query;  
    res.json({
        msg: '',
    });
}
const usuariosPost=(req, res=response) => {
    const body=req.body;
    res.json({
        msg: 'post-usuario-controller',
        body
    });
}
const usuariosPut=(req, res=response) => {
    const {id}=req.params;
    res.json({
        msg: '',
        idselec: id
    });
}
const usuariosPatch=(req, res=response) => {
    res.json({
        msg: '',
    });
}
const usuariosDelete=(req, res=response) => {
    const {id}=req.params;
    res.json({
        msg: '',
        idselec: id
    });
}
module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosPut,
    usuariosDelete
}