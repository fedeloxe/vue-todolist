const {createApp} = Vue;

createApp({
    data(){
        return{
            newTask:'',
            toDoList:[
                {
                    text: 'Chiamare Banca',
                    done: false,
                },
                {
                    text: 'Prendere appuntamento dal barbiere',
                    done: false,
                },
                {
                    text: 'Prenotare tavolo per cena',
                    done: true,
                },
                {
                    text: 'Guardare nuovo ep. chainsawman',
                    done: false,
                },
                {
                    text: 'Montare luci di natale',
                    done: true,
                }
            ]
        }
    },
    methods:{
        addTask(){
            let object = {
                text: this.newTask,
                done: false,
            }
            this.toDoList.push(object);
            this.newTask = '';
        },
        removeTask(index){
            this.toDoList.splice(index, 1);
        },
        checkTask(index)
        {
            let task = this.toDoList[index];

            if(task.done == true){
                task.done= false;
            }
            else{
                task.done= true;
            }

        }
        
    },
}).mount('#app')