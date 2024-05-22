const routes =[
    {
        method : 'GET',
        path :'/',
        handler :(request, h) =>{
            return 'Homepage';
        },
    },
    {
        method : '*',
        path :'/',
        handler :(request, h) => {
            return 'Halaman tidak dapat diakses dengan method tesebut';
        },
    },
    {
        method : 'GET',
        path :'/about',
        handler :(request, h) =>{
            return 'About page';
        },
    },
    {
        method : '*',
        path :'/about',
        handler :(request, h) => {
            return 'Halaman tidak dapat diakses dengan method tesebut';
        },
    },
    {
        method : 'GET',
        path :'/hello/{name?}',
        handler : (request, h) => {
            const {name = "starenger"} = request.params;
            const {lang} = request.query;
            if(lang==='id'){
                return `Hai ${name}`;
            }
            return `Hello, ${name}`;
        },

    },
    {
        method : '*',
        path :'/{any*}',
        handler :(request, h) => {
            return 'Halaman tidak ditemukant';
        },
    }
]

//menambah

module.exports = routes;