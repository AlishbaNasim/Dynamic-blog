import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [

    // Title field

    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the post",
      validation: (Rule) => Rule.required().error('This field  is required'),
    }),

    //summary  field

    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      description: "Summary of the post",
      validation: (Rule) => Rule.required().error('This field  is required'),
    }),

    //slug field

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),

    // image field

    defineField({
      name: "image",
      type: "image",
      title: 'Image',
      options: {
        hotspot: true
      }
    }),

    // Content field

    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        defineArrayMember({
          type: 'block'
        })
      ]
    }),

    // author reference

    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{
        type: 'author'
      }]
    }),

    // published at

    defineField({
      name: 'publishAt',
      type: 'date',
      title: 'PublishedAt',
    })

    // {
    //     name:'gender',
    //     type:'string',
    //     title:'Gender',
    //     options:{
    //         list:[
    //             {title:'Male',value:'male'},
    //             {title:'Female',value:'female'}
    //         ],
    //         layout:'radio',
    //         direction:'horizontal'
    //     }
    // }
  ],
});