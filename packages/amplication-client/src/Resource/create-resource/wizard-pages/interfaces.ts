import { FormikProps } from "formik";
import { AnalyticsEventNames } from "../../../util/analytics-events.types";

export interface ResourceSettings {
  serviceName: string;
  gitOrganizationId: string;
  gitRepositoryName: string;
  generateAdminUI: boolean;
  generateGraphQL: boolean;
  generateRestApi: boolean;
  baseDir: string;
  databaseType: "postgres" | "mysql" | "mongo";
  templateType: "empty" | "orderManagement";
  authType: string;
}
export interface NextPage {
  nextTitle: string;
  isValid: boolean;
}

export enum EnumTemplateType {
  empty = "empty",
  orderManagement = "orderManagement",
}

export interface WizardStepProps {
  moduleClass: string;
  trackWizardPageEvent: (
    eventName: AnalyticsEventNames,
    additionalData?: { [key: string]: string }
  ) => void;
  formik?: FormikProps<{ [key: string]: any }>;
}
