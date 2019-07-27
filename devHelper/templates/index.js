const inquirer = require('inquirer');
const generator = require('custom-template-generator');

var prompt = inquirer.createPromptModule();

function run(){
    prompt([{
        type: "list",
        name: "type",
        message: "Choice module you want to create?",
        choices: ["model","controller","service","middleware","route"]
    }, {
        type: "input",
        name: "name",
        message: "What is file name?"
    },{
        type: "input",
        name: "table",
        message: "What is table name?"
    }]).then((result)=>{
        console.log("result: ", result)
        generator({
            componentName: result.name,
            customTemplatesUrl: './devHelper/templates',
            dest: 'src',
            templateName: 'model',
            wrapInFolder: false,
            data: {
                table: result.table
            }
        });
    })
    function generatorFile(type, name){
        switch(type) {
            case "model":

            case "controller":
            case "service":
            case "middleware":
            case "route":
        }
    }
    function createModel(){

    }
};

run()