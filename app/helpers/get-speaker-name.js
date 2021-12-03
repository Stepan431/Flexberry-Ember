import { helper } from '@ember/component/helper';

export function getSpeakerName(params/*, hash*/) {
  let [firstName, middleName, lastName] = params;
  return '${lastName} ${firstName} ${middleName}';
}
export default helper(getSpeakerName);
