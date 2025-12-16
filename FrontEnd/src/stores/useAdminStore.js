import toast from "react-hot-toast";
import { create } from "zustand";
import axiosInstance from "../functions/axios";
import { useAuthStore } from "./useAuthStore";




export const useAdminStore = create((set, get) => ({
    classes: [],
    setClasses: (value) => {
        set({ classes: value })
    },
    branches: [], //stores data in form of "101,cse" useful for add class, branch management
    branches_details: [],
    subjects:[],
    setBranches: (value) => set({ branches: value }),
    setBranches_details: (value) => set({ branches_details: value }),
    setSubjects: (value) => set({subjects: value}),
    add_class: async (data) => {
        try {
            const { setIsLoading } = useAuthStore.getState();
            data.token = localStorage.getItem("token");
            setIsLoading(true);
            console.log(data);
            const res = await axiosInstance.post("/admin/add-class", data);
            toast.success("Success");
            setIsLoading(false);
            return true;
        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.error(error)
            toast.error(error?.response?.data?.message || "Something went wrong");
            setIsLoading(false);
            return false;
        }
    },
    add_employee: async (data) => {
        try {
            const { setIsLoading } = useAuthStore.getState();
            data.token = localStorage.getItem("token");
            setIsLoading(true);
            console.log(data);
            const res = await axiosInstance.post("/admin/add-employees", data);
            toast.success("Success");
            setIsLoading(false);
            return true;
        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.error(error)
            toast.error(error?.response?.data?.message || "Something went wrong");
            setIsLoading(false);
            return false;
        }
    },
    add_subject: async (data) => {
        try {
            const { setIsLoading } = useAuthStore.getState(); //getting loading state
            data.token = localStorage.getItem("token");      // adding token with req
            setIsLoading(true);                              // loader- true
            const res = await axiosInstance.post("/admin/add-subject", data); //sending req to part. url with data in body
            toast.success("Success");                       //making a success toast
            setIsLoading(false);                            //loading - false
            return true;                                    //return true
        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();   //getting isLoading
            console.error(error)                                //logging error
            toast.error(error?.response?.data?.message || "Something went wrong");  //making error toast
            setIsLoading(false);                                //loader -false
            return false;                                       //return false
        }   
    },
    getClasses: async () => {
        try {
            //setting loading to on
            //making a server req to get all classes names
            //setting class data as state
            //returning as array
            const { setClasses } = get();
            const { setIsLoading } = useAuthStore.getState();
            setIsLoading(true)
            const res = await axiosInstance.post("/admin/get-classes", { token: localStorage.getItem('token') });
            setClasses(res?.data || []);
            setIsLoading(false);
            return res;

        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.log(error)
            toast.error("Error while fetching classes");
            setIsLoading(false)
            return false;
        }
    },
    getSubjects: async () => {
        try {
            //setting loading to on
            //making a server req to get all classes names
            //setting class data as state
            //returning as array
            const { setSubjects } = get();
            const { setIsLoading } = useAuthStore.getState();
            setIsLoading(true)
            const res = await axiosInstance.post("/admin/get-subjects", { token: localStorage.getItem('token') });
            setSubjects(res?.data || []);
            setIsLoading(false);
            return res;

        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.log(error)
            toast.error("Error while fetching classes");
            setIsLoading(false)
            return false;
        }
    },
    
    edit_employee_form_fn: async (data) => {
        try {
            const { setIsLoading } = useAuthStore.getState();
            data.token = localStorage.getItem("token");
            setIsLoading(true);
            console.log(data);
            const rows = await axiosInstance.post("/admin/edit-employees", data);
            toast.success("Success");
            setIsLoading(false);
            return rows;
        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.error(error)
            toast.error(error?.response?.data?.message || "Something went wrong");
            setIsLoading(false);
            return false;
        }
    },
    add_branch: async (data) => {
        try {
            const { setIsLoading } = useAuthStore.getState();
            data.token = localStorage.getItem("token");
            setIsLoading(true);
            console.log(data);
            await axiosInstance.post("/admin/add-branch", data);
            toast.success("Success");
            setIsLoading(false);
            return true;
        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.error(error)
            toast.error(error?.response?.data?.message || "Something went wrong");
            setIsLoading(false);
            return false;
        }
    },
    getBranches: async () => {
        try {
            //setting loading to on
            //making a server req to get all classes names
            //setting class data as state
            //returning as array
            const { setIsLoading } = useAuthStore.getState(); //getting state from auth Store
            const { setBranches } = get();
            setIsLoading(true);
            const result = await axiosInstance.post("/admin/get-branches", { token: localStorage.getItem('token') });
            setBranches(result.data || null);
            setIsLoading(false);
            return true;

        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.log(error)
            toast.error("Error while fetching classes");
            setIsLoading(false)
            return false;
        }
    },
    updateBranchData: async (data) => {
        try {
            const { setIsLoading } = useAuthStore.getState(); //get setIsloading
            data.token = localStorage.getItem("token"); //setting token with req
            setIsLoading(true); //setting loading to true
            console.log(data); //logging the data before sending
            const response = await axiosInstance.post("/admin/update-branch", data); //sending http req
            toast.success("Success"); //tost - success
            setIsLoading(false); // loading to false
            set({ branches_details: response.data })
            return true;
        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.error(error)
            toast.error(error?.response?.data?.message || "Something went wrong");
            setIsLoading(false);
            return false;
        }
    },
    update_subject: async (data) => {
        try {
            const { setIsLoading } = useAuthStore.getState(); //get setIsloading
            data.token = localStorage.getItem("token"); //setting token with req
            setIsLoading(true); //setting loading to true
            const response = await axiosInstance.patch("/admin/update-subject", data); //sending http req
            toast.success("Success"); //toast - success
            setIsLoading(false); // loading to false
            // set({ branches_details: response.data })
            return true;
        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.error(error)
            toast.error(error?.response?.data?.message || "Something went wrong");
            setIsLoading(false);
            return false;
        }
    },
    get_branches_details: async () => {
        try {
            //setting loading to on
            //making a server req to get all classes names
            //setting class data as state
            //returning as array
            const { setIsLoading } = useAuthStore.getState(); //getting state from auth Store
            const { setBranches_details } = get();
            setIsLoading(true);
            const result = await axiosInstance.post("/admin/get-branches-details", { token: localStorage.getItem('token') });
            setBranches_details(result.data || null);
            setIsLoading(false);
            return true;

        } catch (error) {
            const { setIsLoading } = useAuthStore.getState();
            console.log(error)
            toast.error("Error while fetching classes");
            setIsLoading(false)
            return false;
        }
    },
})) 