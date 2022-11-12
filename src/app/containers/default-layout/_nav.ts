import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Canal',
    iconComponent: { name: 'cil-list' },
    children: [
      {
        name: 'Listar',
        url: '/layout/canal/listar'
      },
      {
        name: 'Crear',
        url: '/layout/canal/crear'
      },
      {
        name: 'Modificar',
        url: '/layout/canal/modificar'
      },
      {
        name: 'Eliminar',
        url: '/layout/canal/eliminar'
      },
    ]
  },
  {
    name: 'Cliente',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Listar',
        url: '/layout/cliente/listar'
      },
      {
        name: 'Crear',
        url: '/layout/cliente/crear'
      },
      {
        name: 'Modificar',
        url: '/layout/cliente/modificar'
      },
      {
        name: 'Eliminar',
        url: '/layout/cliente/eliminar'
      },
    ]
  },
  {
    name: 'Telefono',
    iconComponent: { name: 'cil-phone' },
    children: [
      {
        name: 'Listar',
        url: '/layout/telefono/listar'
      },
      {
        name: 'Crear',
        url: '/layout/telefono/crear'
      },
      {
        name: 'Modificar',
        url: '/layout/telefono/modificar'
      },
      {
        name: 'Eliminar',
        url: '/layout/telefono/eliminar'
      },
    ]
  },
  {
    name: 'Condiciones de Venta',
    iconComponent: { name: 'cil-chat-bubble' },
    children: [
      {
        name: 'Listar',
        url: '/layout/condiciones/listar'
      },
      {
        name: 'Crear',
        url: '/layout/condiciones/crear'
      },
      {
        name: 'Modificar',
        url: '/layout/condiciones/modificar'
      },
      {
        name: 'Eliminar',
        url: '/layout/condiciones/eliminar'
      },
    ]
  },
  {
    name: 'Familia Producto',
    iconComponent: { name: 'cil-group' },
    children: [
      {
        name: 'Listar',
        url: '/layout/familia-producto/listar'
      },
      {
        name: 'Crear',
        url: '/layout/familia-producto/crear'
      },
      {
        name: 'Modificar',
        url: '/layout/familia-producto/modificar'
      },
      {
        name: 'Eliminar',
        url: '/layout/familia-producto/eliminar'
      },
    ]
  },
  {
    name: 'IVA',
    iconComponent: { name: 'cil-Money' },
    children: [
      {
        name: 'Listar',
        url: '/layout/iva/listar'
      },
      {
        name: 'Crear',
        url: '/layout/iva/crear'
      },
      {
        name: 'Modificar',
        url: '/layout/iva/modificar'
      },
      {
        name: 'Eliminar',
        url: '/layout/iva/eliminar'
      },
    ]
  },
  {
    name: 'Permiso',
    iconComponent: { name: 'cil-description' },
    children: [
      {
        name: 'Listar',
        url: '/layout/permiso/listar'
      },
      {
        name: 'Crear',
        url: '/layout/permiso/crear'
      },
      {
        name: 'Modificar',
        url: '/layout/permiso/modificar'
      },
      {
        name: 'Eliminar',
        url: '/layout/permiso/eliminar'
      },
    ]
  },
  {
    name: 'Producto',
    iconComponent: { name: 'cil-cart' },
    children: [
      {
        name: 'Listar',
        url: '/layout/producto/listar'
      },
      {
        name: 'Crear',
        url: '/layout/producto/crear'
      },
      {
        name: 'Modificar',
        url: '/layout/producto/modificar'
      },
      {
        name: 'Eliminar',
        url: '/layout/producto/eliminar'
      },
    ]
  },
  {
    name: 'Regla Comercial',
    iconComponent: { name: 'cil-library-building' },
    children: [
      {
        name: 'Listar',
        url: '/layout/regla-comercial/listar'
      },
      {
        name: 'Crear',
        url: '/layout/regla-comercial/crear'
      },
      {
        name: 'Modificar',
        url: '/layout/regla-comercial/modificar'
      },
      {
        name: 'Eliminar',
        url: '/layout/regla-comercial/eliminar'
      },
    ]
  },



];