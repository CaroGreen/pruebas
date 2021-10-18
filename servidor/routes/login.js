const {Router} =require('express');
const {check}=require('express-validator');
const router =Router();
const {crearUsuario,loginUsuario,revalidarToken, googleLogin }=require('../controllers/Login');
const { validarGoogle } = require('../middleware/validar-google');

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El pasword debe ser de 6 caracteres').isLength({min:6}),
    ],
    crearUsuario);
router.post('/',loginUsuario);
router.get('/renew',revalidarToken);
router.post('/google/login', validarGoogle, googleLogin);

module.exports=router;