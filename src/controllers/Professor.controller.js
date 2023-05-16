import express from 'express';
import Professor from '../models/Professor.model.js';

class ProfessorController {
  /**
   * @param {express.Request} request 
   * @param {express.Response} response 
   */
  async list(_, response) {
    let content = {};

    try {
      const data = await Professor.findAll();
      content = {
        success: true,
        data
      };
    } catch (error) {
      content = {
        success: false,
        error
      };
    } finally {
      return response.json(content);
    }
  }
};

export default ProfessorController;