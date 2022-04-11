export enum  PUBLISH_TYPE {
  NOT_PUBLISH, //未发布
  PUBLISHING, //发布中
  PUBLISTEND, //已发布
  PUBISH_OFF  //发布下线
}
export enum  AUDIT_TYPE {
  NOT_AUDIT, //未审核
  AUDITING, //审核中
  AUDITEND, //审核完成
  AUDIT_OFF //未通过审核
}
export const AUDIT_MAP :any ={
  [AUDIT_TYPE.NOT_AUDIT]:"未审核",
  [AUDIT_TYPE.AUDITING]:"审核中",
  [AUDIT_TYPE.AUDITEND]:"审核完成",
  [AUDIT_TYPE.AUDIT_OFF]:"未通过"
}
export const PUBLISH_MAP:any ={
  [PUBLISH_TYPE.NOT_PUBLISH]:"未发布",
  [PUBLISH_TYPE.PUBLISHING]:"发布中",
  [PUBLISH_TYPE.PUBLISTEND]:"已发布",
  [PUBLISH_TYPE.PUBISH_OFF]:"已下线"
}