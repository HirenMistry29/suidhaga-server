import ExcelDataModel from "../models/bulkAdd.model.js";

const bulkAddResolvers = {
    Query:{
      excelData: async () => {
        try {
          const contact = await ExcelDataModel.find();
          return contact;
        } catch (error) {
          throw new Error('Error fetching contacts');
        }
    },
  },
  Mutation:{
    bulkAdd: async (_, { contacts }) => {
      try {
        const savedContacts = await Promise.all(contacts.map(async (contact) => {
          const newContact = new Contact(contact);
          return await newContact.save();
        }));
        console.log(savedContacts);
        return savedContacts;
      } catch (error) {
        throw new Error('Error adding contacts');
      }
    }
  }
}

  export default bulkAddResolvers;