Vue.component(
    'length-input',
    {
        props:[
            'body_part'
        ],
        template:
        '<div class="col-sm-6">'+
            '<label for="">{{body_part.name}}</label>'+
            '<input type="number" v-model="body_part.length">'+        
        '</div>'
    }
)