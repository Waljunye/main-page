const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/views"))
app.get('/', (req, res) => {
    res.redirect('en')
})
app.get('/en', (req, res) => {
    const enContent =
        {
            headerTitle: "Matvey Volkov",
            headerDescription: "Front-end developer",
            aboutText: "About me",
            techStackText: "Technology Stack",
            recommendedResourcesText: "Recommended Resources",
            myProjectsText: "My projects",
            contactMeText: "Contact Me",
            myTeammatesText: "My teammates"
        };
    res.render('./pages/index', {
        content: enContent,
    })
})
app.get('/ru', (req, res) => {
    const ruContent =
        {
            headerTitle: "Матвей Волков",
            headerDescription: "Front-end developer",
            aboutText: "Про меня",
            techStackText: "Стек Технологий",
            recommendedResourcesText: "Рекомендуемые ресурсы",
            myProjectsText: "Мои проекты",
            contactMeText: "Связь со мной",
            myTeammatesText: "Мои друзья"
        };

    res.render('./pages/index', {
        content: ruContent,
    })
})

app.listen(3000)
console.log('Server listened on http://localhost:3000')