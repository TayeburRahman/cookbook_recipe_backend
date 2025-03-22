import QueryBuilder from "../../../builder/QueryBuilder";
import User from "../user/user.model";
import { Recipe, Subscription } from "./dashboard.model";
import { ISubscriptions } from "./dsashbaord.interface";

const getAllUser = async (query: any) => {
    const {page, limit, searchTerm} = query;
    
    if(query?.searchTerm){
        delete query.page;
    } 
      const userQuery = new QueryBuilder(User.find()  
        , query)
        .search(["name", "email"])
        .filter()
        .sort()
        .paginate()
        .fields() 
  
      const result = await userQuery.modelQuery;
      const meta = await userQuery.countTotal();
  
      console.log(result)
  
      return { result, meta };
    
  };
// =Subscriptions =================================
const createSubscriptions = async (payload: ISubscriptions) => { 
    try {
        const subscription = new Subscription(payload);
        await subscription.save();
        return subscription;
    } catch (error: any) {
        throw new Error(`Error creating subscription: ${error.message}`);
    }
    
  };

  const updateSubscription = async (id: string, payload: Partial<ISubscriptions>) => {
    try {
        const updatedSubscription = await Subscription.findByIdAndUpdate(id, payload, { new: true });
        if (!updatedSubscription) {
            throw new Error('Subscription not found');
        }
        return updatedSubscription;
    } catch (error: any) {
        throw new Error(`Error updating subscription: ${error.message}`);
    }
};

const deleteSubscription = async (id: string) => {
    try {
        const deletedSubscription = await Subscription.findByIdAndDelete(id);
        if (!deletedSubscription) {
            throw new Error('Subscription not found');
        }
        return deletedSubscription;
    } catch (error: any) {
        throw new Error(`Error deleting subscription: ${error.message}`);
    }
};

// ====================================
const getAllRecipes = async (query: any) => {
    const {page, limit, searchTerm} = query;
    
    if(query?.searchTerm){
        delete query.page;
    } 
      const userQuery = new QueryBuilder(User.find()  
        , query)
        .search(["name", "email"])
        .filter()
        .sort()
        .paginate()
        .fields() 
  
      const result = await userQuery.modelQuery;
      const meta = await userQuery.countTotal();
  
      console.log(result)
  
      return { result, meta };
    
  };

  const createRecipes = async (payload: ISubscriptions) => { 
    try {
        const subscription = new Recipe(payload);
        await subscription.save();
        return subscription;
    } catch (error: any) {
        throw new Error(`Error creating subscription: ${error.message}`);
    }
    
  }
  const updateRecipes = async (id: string, payload: Partial<ISubscriptions>) => {
    try {
        const updatedSubscription = await Subscription.findByIdAndUpdate(id, payload, { new: true });
        if (!updatedSubscription) {
            throw new Error('Subscription not found');
        }
        return updatedSubscription;
    } catch (error: any) {
        throw new Error(`Error updating subscription: ${error.message}`);
    }
};

const deleteRecipe = async (id: string) => {
    try {
        const deletedSubscription = await Subscription.findByIdAndDelete(id);
        if (!deletedSubscription) {
            throw new Error('Subscription not found');
        }
        return deletedSubscription;
    } catch (error: any) {
        throw new Error(`Error deleting subscription: ${error.message}`);
    }
};


  export const DashbaordService = { 
    getAllUser,
    createSubscriptions,
    updateSubscription,
    deleteSubscription,
    getAllRecipes,
    createRecipes,
    updateRecipes,
    deleteRecipe

  };