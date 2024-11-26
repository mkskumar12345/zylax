import allApiRoutes from "./allApiRoutes";
import allPagesRoutes from "./allPagesRoutes";

const getServicesRouteAndPath = (slug: string) => {
  let apiPath = "";
  let path = "";
  switch (slug) {
    case "cloud-storage-and-backup":
      path = allPagesRoutes.CLOUD_STORAGE_AND_BACKUP;
      apiPath = allApiRoutes.cloudStorageAndBackup.CLOUD_STORAGE_AND_BACKUP;
      break;
    case "email-support-and-backup":
      path = allPagesRoutes.EMAIL_SUPPORT_AND_BACKUP;
      apiPath = allApiRoutes.EmailSupportAndBackup.Email_Support_And_Backup;
      break;
    case "computer-repairs":
      path = allPagesRoutes.computer_repairs;
      apiPath = allApiRoutes.ComputerRepairs.Computer_Repairs;
      break;
    case "tablet-repairs":
      path = allPagesRoutes.tablet_repairs;
      apiPath = allApiRoutes.TabletRepairs.Tablet_Repairs;
      break;
    case "macbook-repairs":
      path = allPagesRoutes.Macbook_repairs;
      apiPath = allApiRoutes.macbook_repair.macbook_repair;
      break;
    case "laptop-repairs-sydney":
      path = allPagesRoutes.Laptop_Repairs_Sydney;
      apiPath = allApiRoutes.LaptopRepairsSydney.Laptop_Repairs_Sydney;
      break;
    case "mobile-repairs":
      path = allPagesRoutes.Mobile_Repairs;
      apiPath = allApiRoutes.MobileRepairs.Mobile_Repairs;
      break;
    case "business-it-support":
      path = allPagesRoutes.BUSINESS_IT_SUPPORT;
      apiPath = allApiRoutes.businessAndItSupport.BUSINESS_AND_IT_SUPPORT;
      break;
    default:
      path = "";
      apiPath = "";
  }
  return {
    apiPath,
    path,
  };
};

export default getServicesRouteAndPath;
