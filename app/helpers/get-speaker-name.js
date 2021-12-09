import { helper } from '@ember/component/helper';

export function getSpeakerName(params/*, hash*/) {
  let [firstName, middleName, lastName] = params;
  return `${firstName} ${middleName} ${lastName}`;
}
export default helper(getSpeakerName);
