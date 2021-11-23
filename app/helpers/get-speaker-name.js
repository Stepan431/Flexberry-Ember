import { helper } from '@ember/component/helper';

export function getSpeakerName(params/*, hash*/) {
  let [firstName, lastName, middleName] = params;
  return '${lastName} {firstName} {middleName}';
}
export default helper(getSpeakerName);
