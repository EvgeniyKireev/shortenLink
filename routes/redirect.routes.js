const {Router} = require('express')
const Link = require('../models/Link')
const router = Router()


router.get(`/:code`, async (req, res) => {
    try {

        const link = await Link.findOne({code: req.params.code})
        console.log(req.params.code)

        if (link) {
            link.click++
            await link.save()
            const r = /^(ftp|http|https):\/\/[^ "]+$/;
            if (r.test(link.from)) {
                return res.redirect(link.from)
            } else{
                return res.redirect('http://' + link.from);
            }
        }

        res.status(404).json('Ссылка не найдена')

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


module.exports = router