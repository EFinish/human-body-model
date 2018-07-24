Vue.component(
    'length-input',
    {
        props:[
            'body_part'
        ],
        template:
        '<div class="col-sm-6 form-group">'+
            '<label for="">Length for {{body_part.name}} </label>'+
            '<div class="input-group">' +
                '<input type="number" v-model="body_part.value" @change="log">'+ 
            '</div>' +    
        '</div>',
        methods: {
            log: function () {
                console.log(this.body_part);
                console.log(this.body_part.name);
                console.log(this.body_part.value);
            }
        }
    }
)

Vue.component(
    'circumference-input',
    {
        props:[
            'body_part'
        ],
        template:
        '<div class="col-sm-6 form-group">'+
            '<label for="">Circumference for {{body_part.name}} </label>'+
            '<div class="input-group">' +
                '<input type="number" v-model="body_part.value">'+    
            '</div>' +       
        '</div>'
    }
)