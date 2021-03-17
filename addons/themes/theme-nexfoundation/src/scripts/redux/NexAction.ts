import ReduxActions, { bindThunkAction } from "@library/redux/ReduxActions";
import { INexCategory, INexTags } from "addons/themes/theme-nexfoundation/src/scripts/redux/NexReducer";
import actionCreatorFactory from "typescript-fsa";
import { IApiError } from "@library/@types/api/core";

const createAction = actionCreatorFactory("@@nex");
export default class NexActions extends ReduxActions {
    public static getTags = createAction.async<{}, INexTags, IApiError>("GET_TAGS");
    public static getCategory = createAction.async<{}, INexCategory, IApiError>("GET_CATEGORY");
}
