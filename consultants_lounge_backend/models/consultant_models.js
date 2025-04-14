import { User } from './schemas/user_schema.js';  // Import your User model
import { Consultant } from './schemas/user_consultant_schema.js';  // Import your Consultant model
import { Employment } from './schemas/consultant_employment_schema.js';  // Import your Consultant model

export const add_employment = async (consultantId, employment) => {

    //Creating a new employment
    const newEmployment = new Employment({
        company: employment.company,
        city: employment.city,
        country: employment.country,
        title: employment.title,
        start_date: employment.start_date,
        end_date: employment.end_date,
        description: employment.description
      });
  
      await newEmployment.save();

    //Adding employment to Consultant's employment history
      const consultant = await Consultant.findById(consultantId);
      consultant.employment_history.push(newEmployment._id);
      return await consultant.save();
}