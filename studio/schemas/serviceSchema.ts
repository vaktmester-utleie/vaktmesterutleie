import { defineField, defineType } from "sanity";


export const serviceSchema = defineType({
    name:'service',
    title:'Tjeneste'
    ,
    type:'document'
    ,
    fields:[{name:'title', type:'string'}]
})