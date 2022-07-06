import mongoose from "mongoose";

export const AppDataSource = {
    
    async initialize() {
        await mongoose.connect('mongodb://localhost:27017/attendancedb');
    }
}
