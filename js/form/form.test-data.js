let testData = (function() {
    let ExampleItem = function(type, desc, sum) {
        this.type = type,
        this.desc = desc,
        this.sum = sum
    }
    
    let item = [
        new ExampleItem('Кириллова Анастасия', '30(388)883-87-75', 'geusottoppoxei-9695@yopmail.com'),
        new ExampleItem('Кириллова Анастасия', '27(93)771-07-23', 'tahaguttase-5752@yopmail.com'),
        new ExampleItem('Яковлев Дмитрий', '99(0318)670-05-77', 'crawammanauri-1043@yopmail.com'),
        new ExampleItem('Волков Матвей', '3(84)247-06-77', 'zalautrullegre-3208@yopmail.com'),
        new ExampleItem('Авдеева Василиса', '128(99)176-85-69', 'crugepauzimmoi-3072@yopmail.com'),
        new ExampleItem('Зуев Дамир', '4(1860)627-42-31', 'fakobrafrafeu-1570@yopmail.com'),
        new ExampleItem('Тимофеев Максим', '2(214)083-84-23', 'breprebrafatri-6155@yopmail.com'),
        new ExampleItem('Сафонова Александра', '8(1014)562-30-08', 'lattomadava-3179@yopmail.com')
    ]
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    function insertInUI() {
        let elem = item[getRandomInt(item.length)];
        
        document.querySelector('#name').value = elem.type;
        document.querySelector('#phone').value = elem.desc;
        document.querySelector('#email').value = elem.sum;
    }
    
    return {
        init: insertInUI
    }
})();

testData.init();