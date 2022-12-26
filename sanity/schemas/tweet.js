import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text in tweet',
      type: 'string',
    }),
   
    defineField({
      name: 'blocktweet',
      title: 'Block tweet',
      description:"ADMIN COntrols: Toggle if Tweet is demanded inapproprite",
      type: 'boolean',
    
    }),
    defineField({
      name: 'username',
      title: 'username',
      type: 'string',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
      
    }),
    defineField({
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
    }),
  
  ],

  
})
