// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express from 'express';

declare global {
  module Express {
    interface Request {
      user?: Record<string, any>
    }
  }
}
