import { GET_IMPORT, DISPOSE_IMPORT } from '../constants';

export default function (state = null, action) {
  switch (action.type) {
    case GET_IMPORT: {
      const currentImport = action.payload;
      if (currentImport != null) {
        return {
          recordInformation: currentImport.recordInformation,
          screenshots: currentImport.screenshots,
          statistics: currentImport.statistics,
          linkToRecord: currentImport.linkToRecord,
          isProcessing: currentImport.isProcessing
        };
      }
      return state;
    }

    case DISPOSE_IMPORT:
      return null;

    default:
      return state;
  }
}
