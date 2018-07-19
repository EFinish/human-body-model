Vue.component(
    'length-input',
    {
        props:[
            'body_part'
        ],
        template:
        '<div class="col-sm-6">'+
            '<label for="">Length for {{body_part.name}}</label>'+
            '<input type="number" v-model="body_part.value">'+        
        '</div>'
    }
)

Vue.component(
    'width-input',
    {
        props:[
            'body_part'
        ],
        template:
        '<div class="col-sm-6">'+
            '<label for="">Width for {{body_part.name}}</label>'+
            '<input type="number" v-model="body_part.value">'+        
        '</div>'
    }
)