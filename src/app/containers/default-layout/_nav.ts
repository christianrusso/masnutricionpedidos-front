import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Canal',
    url: '/masnutricion/canal',
    iconComponent: { name: 'cil-list' },
    children: [
      {
        name: 'Listar',
        url: '/masnutricion/canal/listar'
      },
      {
        name: 'Crear',
        url: '/masnutricion/canal/crear'
      },
      {
        name: 'Modificar',
        url: '/masnutricion/canal/modificar'
      },
      {
        name: 'Eliminar',
        url: '/masnutricion/canal/eliminar'
      },
    ]
  },
  {
    name: 'Cliente',
    url: '/masnutricion/cliente',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Listar',
        url: '/masnutricion/cliente/listar'
      },
      {
        name: 'Crear',
        url: '/masnutricion/cliente/crear'
      },
      {
        name: 'Modificar',
        url: '/masnutricion/cliente/modificar'
      },
      {
        name: 'Eliminar',
        url: '/masnutricion/cliente/eliminar'
      },
    ]
  },
  {
    name: 'Telefono',
    url: '/masnutricion/telefono',
    iconComponent: { name: 'cil-phone' },
    children: [
      {
        name: 'Listar',
        url: '/masnutricion/telefono/listar'
      },
      {
        name: 'Crear',
        url: '/masnutricion/telefono/crear'
      },
      {
        name: 'Modificar',
        url: '/masnutricion/telefono/modificar'
      },
      {
        name: 'Eliminar',
        url: '/masnutricion/telefono/eliminar'
      },
    ]
  },
  {
    name: 'Condiciones de Venta',
    url: '/masnutricion/condiciones',
    iconComponent: { name: 'cil-chat-bubble' },
    children: [
      {
        name: 'Listar',
        url: '/masnutricion/condiciones/listar'
      },
      {
        name: 'Crear',
        url: '/masnutricion/condiciones/crear'
      },
      {
        name: 'Modificar',
        url: '/masnutricion/condiciones/modificar'
      },
      {
        name: 'Eliminar',
        url: '/masnutricion/condiciones/eliminar'
      },
    ]
  },
  {
    name: 'Familia Producto',
    url: '/masnutricion/familia',
    iconComponent: { name: 'cil-group' },
    children: [
      {
        name: 'Listar',
        url: '/masnutricion/familia/listar'
      },
      {
        name: 'Crear',
        url: '/masnutricion/familia/crear'
      },
      {
        name: 'Modificar',
        url: '/masnutricion/familia/modificar'
      },
      {
        name: 'Eliminar',
        url: '/masnutricion/familia/eliminar'
      },
    ]
  },
  {
    name: 'IVA',
    url: '/masnutricion/iva',
    iconComponent: { name: 'cil-Money' },
    children: [
      {
        name: 'Listar',
        url: '/masnutricion/iva/listar'
      },
      {
        name: 'Crear',
        url: '/masnutricion/iva/crear'
      },
      {
        name: 'Modificar',
        url: '/masnutricion/iva/modificar'
      },
      {
        name: 'Eliminar',
        url: '/masnutricion/iva/eliminar'
      },
    ]
  },
  {
    name: 'Permiso',
    url: '/masnutricion/permiso',
    iconComponent: { name: 'cil-description' },
    children: [
      {
        name: 'Listar',
        url: '/masnutricion/permiso/listar'
      },
      {
        name: 'Crear',
        url: '/masnutricion/permiso/crear'
      },
      {
        name: 'Modificar',
        url: '/masnutricion/permiso/modificar'
      },
      {
        name: 'Eliminar',
        url: '/masnutricion/permiso/eliminar'
      },
    ]
  },
  {
    name: 'Producto',
    url: '/masnutricion/producto',
    iconComponent: { name: 'cil-cart' },
    children: [
      {
        name: 'Listar',
        url: '/masnutricion/producto/listar'
      },
      {
        name: 'Crear',
        url: '/masnutricion/producto/crear'
      },
      {
        name: 'Modificar',
        url: '/masnutricion/producto/modificar'
      },
      {
        name: 'Eliminar',
        url: '/masnutricion/producto/eliminar'
      },
    ]
  },
  {
    name: 'Regla Comercial',
    url: '/masnutricion/regla',
    iconComponent: { name: 'cil-library-building' },
    children: [
      {
        name: 'Listar',
        url: '/masnutricion/regla/listar'
      },
      {
        name: 'Crear',
        url: '/masnutricion/regla/crear'
      },
      {
        name: 'Modificar',
        url: '/masnutricion/regla/modificar'
      },
      {
        name: 'Eliminar',
        url: '/masnutricion/regla/eliminar'
      },
    ]
  },



];