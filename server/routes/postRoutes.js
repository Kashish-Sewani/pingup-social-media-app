import express from 'express'
import { upload } from '../configs/multer.js'
import { protect } from '../middlewares/auth.js'
import { addPost, getPosts, likePost } from '../controllers/postController.js'

const postRouter = express.Router()

postRouter.post('/add', upload.array('images', 4), protect, addPost)
postRouter.get('/feed', protect, getPosts)
postRouter.post('/like', protect, likePost)

export default postRouter;