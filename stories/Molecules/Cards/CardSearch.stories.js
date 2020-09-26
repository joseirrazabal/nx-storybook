/* eslint-disable import/exports-last */
import React from 'react'

import CardSearch from 'Components/Molecules/Cards/CardSearch'

const Component = ({ ...args }) => {
  return <CardSearch {...args} />
}

export default {
  title: '/Molecules/Card',
}

export const Search = Component.bind({})
Search.argTypes = {
  title: {
    name: 'titulo',
    description: 'Texto del boton',
    type: { name: 'string', required: false },
    control: {
      type: 'text',
    },
    defaultValue: 'Titulo de ejemplo de una pelicula',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Titulo de ejemplo de una pelicula' },
    },
  },
  subTitle: {
    name: 'sub-titulo',
    description: 'sub-titulo',
    type: { name: 'string', required: false },
    control: {
      type: 'text',
    },
    defaultValue: 'ontem as 17h',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Titulo de ejemplo de una pelicula' },
    },
  },
  width: {
    name: 'width',
    description: 'width',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '290px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '290px' },
    },
  },
  height: {
    name: 'height',
    description: 'height',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '225px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '225px' },
    },
  },
  bgSize: {
    name: 'bgSize',
    description: 'bgSize',
    type: { name: 'text', required: false },
    control: {
      type: 'text',
    },
    defaultValue: '290px',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '290px' },
    },
  },
  borderRadius: {
    name: 'borde',
    description: 'borde',
    type: { name: 'number', required: false },
    control: {
      type: 'number',
    },
    defaultValue: 6,
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: 6 },
    },
  },
  image: {
    name: 'image',
    description: 'imagen',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: 'http://netb.tmsimg.com/assets/p9087912_v_h2_ac.jpg',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' },
    },
  },
}
