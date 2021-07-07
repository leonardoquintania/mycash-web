import { createRouter, createWebHistory } from 'vue-router';
import AlterarSenha from '../views/alterarsenha/AlterarSenha';
import Lancamentos from '../views/lancamentos/Lancamentos';
import Usuarios from '../views/usuarios/Usuarios';

const routes = [
  {
    path: '/',
    name: 'Lancamentos',
    component: Lancamentos,
  },
  {
    path: '/alterarsenha',
    name: 'Alterar Senha',
    component: AlterarSenha,
  },

  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
