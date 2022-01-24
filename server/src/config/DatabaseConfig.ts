import mongoose from 'mongoose';

import 'dotenv/config';

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER_PASS}@gestion.jz5kd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  () => {
    console.log('connected to database MongoDB');
  },
);

export default mongoose;
