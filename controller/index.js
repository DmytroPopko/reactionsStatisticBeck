const service = require('../service')

const get = async (req, res, next) => {
    try {
      const results = await service.getAllStreams();
      res.json({
        status: 'success',
        code: 200,
        data: {
          stream: results,
        },
      });
    } catch (e) {
      console.error(e);
      next(e);
    }
  };

  const getById = async (req, res, next) => {
    const { id } = req.params
    try {
      const result = await service.getStreamById(id)
      if (result) {
        res.json({
          status: 'success',
          code: 200,
          data: { stream: result },
        })
      } else {
        res.status(404).json({
          status: 'error',
          code: 404,
          message: `Not found stream id: ${id}`,
          data: 'Not Found',
        })
      }
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
  
  const create = async (req, res, next) => {
    const { registered, unregistered } = req.body
    try {
      const result = await service.createStream({ registered, unregistered })
  
      res.status(201).json({
        status: 'success',
        code: 201,
        data: { stream: result },
      })
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
  
  const update = async (req, res, next) => {
    const { id } = req.params
    const { registered, unregistered } = req.body
  
    try {
      const result = await service.updateStream(id, { registered, unregistered })
      if (result) {
        res.json({
          status: 'success',
          code: 200,
          data: { stream: result },
        })
      } else {
        res.status(404).json({
          status: 'error',
          code: 404,
          message: `Not found stream id: ${id}`,
          data: 'Not Found',
        })
      }
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
  
  const remove = async (req, res, next) => {
    const { id } = req.params
  
    try {
      const result = await service.removeStream(id)
      if (result) {
        res.json({
          status: 'success',
          code: 200,
          data: { stream: result },
        })
      } else {
        res.status(404).json({
          status: 'error',
          code: 404,
          message: `Not found stream id: ${id}`,
          data: 'Not Found',
        })
      }
    } catch (e) {
      console.error(e)
      next(e)
    }
  }
  
  module.exports = {
    get,
    getById,
    create,
    update,
    remove,
  }
  