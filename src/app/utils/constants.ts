export const colors = {
    PRIMARY: '#333333',
    WHITE: '#FFFFFF'
};

export const global = {
    url: 'https://printmelonwebappapidev.azurewebsites.net/api/',
    companyname: 'PrintMelon',
    companyslogan: 'PrintMelon slogan',
    regexpLetters: '[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{3,45}',
    regexpNumbers: '[0-9]',
    regexpPhone: '[0-9]{10}',
    regexpEmail: '^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,3}$',
    regexpPassword: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
};
