import express, { Router } from 'express';
import ProfessorController from './controllers/Professor.controller.js';

const professorController = new ProfessorController();

const routes = Router();

routes.get('/', home);
routes.get('/professor', professorController.list);

/**
 * @param {express.Response} response 
 */
function home(_, response) {
  return response.json({
    success: true,
    message: 'Hello, World!'
  });
}

export default routes;