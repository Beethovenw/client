/* @flow */

// This file is auto-generated by client/protocol/Makefile.

export const account = {}

export const apiserver = {}

export const backendCommon = {}

export const block = {}

export const BTC = {}

export const chatLocal = {}

export const Common = {
  'LogLevel': {
    'none': 0,
    'debug': 1,
    'info': 2,
    'notice': 3,
    'warn': 4,
    'error': 5,
    'critical': 6,
    'fatal': 7,
  },
  'ClientType': {
    'none': 0,
    'cli': 1,
    'gui': 2,
    'kbfs': 3,
  },
  'MerkleTreeID': {
    'master': 0,
    'kbfsPublic': 1,
    'kbfsPrivate': 2,
  },
}

export const config = {
  'ForkType': {
    'none': 0,
    'auto': 1,
    'watchdog': 2,
    'launchd': 3,
  },
}

export const constants = {
  'StatusCode': {
    'scok': 0,
    'scloginrequired': 201,
    'scbadsession': 202,
    'scbadloginusernotfound': 203,
    'scbadloginpassword': 204,
    'scnotfound': 205,
    'scthrottlecontrol': 210,
    'scgeneric': 218,
    'scalreadyloggedin': 235,
    'sccanceled': 237,
    'scinputcanceled': 239,
    'screloginrequired': 274,
    'scresolutionfailed': 275,
    'scprofilenotpublic': 276,
    'scidentifyfailed': 277,
    'sctrackingbroke': 278,
    'scwrongcryptoformat': 279,
    'scdecryptionerror': 280,
    'scbadsignupusernametaken': 701,
    'scbadinvitationcode': 707,
    'scmissingresult': 801,
    'sckeynotfound': 901,
    'sckeyinuse': 907,
    'sckeybadgen': 913,
    'sckeynosecret': 914,
    'sckeybaduids': 915,
    'sckeynoactive': 916,
    'sckeynosig': 917,
    'sckeybadsig': 918,
    'sckeybadeldest': 919,
    'sckeynoeldest': 920,
    'sckeyduplicateupdate': 921,
    'scsibkeyalreadyexists': 922,
    'scdecryptionkeynotfound': 924,
    'sckeynopgpencryption': 927,
    'sckeynonaclencryption': 928,
    'sckeysyncedpgpnotfound': 929,
    'sckeynomatchinggpg': 930,
    'sckeyrevoked': 931,
    'scbadtracksession': 1301,
    'scdevicenotfound': 1409,
    'scdevicemismatch': 1410,
    'scdevicerequired': 1411,
    'scdeviceprevprovisioned': 1413,
    'scdevicenoprovision': 1414,
    'scstreamexists': 1501,
    'scstreamnotfound': 1502,
    'scstreamwrongkind': 1503,
    'scstreameof': 1504,
    'scgenericapierror': 1600,
    'scapinetworkerror': 1601,
    'sctimeout': 1602,
    'scprooferror': 1701,
    'scidentificationexpired': 1702,
    'scselfnotfound': 1703,
    'scbadkexphrase': 1704,
    'scnouidelegation': 1705,
    'scnoui': 1706,
    'scgpgunavailable': 1707,
    'scinvalidversionerror': 1800,
    'scoldversionerror': 1801,
    'scinvalidlocationerror': 1802,
    'scservicestatuserror': 1803,
    'scinstallerror': 1804,
  },
}

export const crypto = {}

export const ctl = {
  'ExitCode': {
    'ok': 0,
    'notok': 2,
    'restart': 4,
  },
}

export const debugging = {}

export const delegateUiCtl = {}

export const device = {}

export const favorite = {}

export const fs = {}

export const gpgCommon = {}

export const gpgUi = {}

export const gregor = {}

export const gregorUI = {
  'PushReason': {
    'none': 0,
    'reconnected': 1,
    'newData': 2,
  },
}

export const identify = {}

export const identifyCommon = {
  'TrackDiffType': {
    'none': 0,
    'error': 1,
    'clash': 2,
    'revoked': 3,
    'upgraded': 4,
    'new': 5,
    'remoteFail': 6,
    'remoteWorking': 7,
    'remoteChanged': 8,
    'newEldest': 9,
    'noneViaTemporary': 10,
  },
  'TrackStatus': {
    'newOk': 1,
    'newZeroProofs': 2,
    'newFailProofs': 3,
    'updateBrokenFailedProofs': 4,
    'updateNewProofs': 5,
    'updateOk': 6,
    'updateBrokenRevoked': 7,
  },
  'IdentifyReasonType': {
    'none': 0,
    'id': 1,
    'track': 2,
    'encrypt': 3,
    'decrypt': 4,
    'verify': 5,
    'resource': 6,
  },
}

export const identifyUi = {
  'CheckResultFreshness': {
    'fresh': 0,
    'aged': 1,
    'rancid': 2,
  },
  'DismissReasonType': {
    'none': 0,
    'handledElsewhere': 1,
  },
}

export const install = {
  'InstallStatus': {
    'unknown': 0,
    'error': 1,
    'notInstalled': 2,
    'installed': 4,
  },
  'InstallAction': {
    'unknown': 0,
    'none': 1,
    'upgrade': 2,
    'reinstall': 3,
    'install': 4,
  },
}

export const kbfs = {}

export const kbfsCommon = {
  'FSStatusCode': {
    'start': 0,
    'finish': 1,
    'error': 2,
  },
  'FSNotificationType': {
    'encrypting': 0,
    'decrypting': 1,
    'signing': 2,
    'verifying': 3,
    'rekeying': 4,
    'connection': 5,
    'mdReadSuccess': 6,
  },
  'FSErrorType': {
    'accessDenied': 0,
    'userNotFound': 1,
    'revokedDataDetected': 2,
    'notLoggedIn': 3,
    'timeout': 4,
    'rekeyNeeded': 5,
    'badFolder': 6,
    'notImplemented': 7,
    'oldVersion': 8,
    'overQuota': 9,
    'noSigChain': 10,
  },
}

export const Kex2Provisionee = {}

export const Kex2Provisioner = {}

export const log = {}

export const logUi = {}

export const login = {}

export const loginUi = {}

export const metadata = {}

export const metadataUpdate = {}

export const NotifyApp = {}

export const notifyCtl = {}

export const NotifyFavorites = {}

export const NotifyFS = {}

export const NotifyKeyfamily = {}

export const NotifyPaperKey = {}

export const NotifyService = {}

export const NotifySession = {}

export const NotifyTracking = {}

export const NotifyUsers = {}

export const paperprovision = {}

export const passphraseCommon = {
  'PassphraseType': {
    'none': 0,
    'paperKey': 1,
    'passPhrase': 2,
    'verifyPassPhrase': 3,
  },
}

export const pgp = {
  'SignMode': {
    'attached': 0,
    'detached': 1,
    'clear': 2,
  },
}

export const pgpUi = {}

export const process = {
  'FileType': {
    'unknown': 0,
    'directory': 1,
    'file': 2,
  },
}

export const prove = {}

export const proveCommon = {
  'ProofState': {
    'none': 0,
    'ok': 1,
    'tempFailure': 2,
    'permFailure': 3,
    'looking': 4,
    'superseded': 5,
    'posted': 6,
    'revoked': 7,
  },
  'ProofStatus': {
    'none': 0,
    'ok': 1,
    'local': 2,
    'found': 3,
    'baseError': 100,
    'hostUnreachable': 101,
    'permissionDenied': 103,
    'failedParse': 106,
    'dnsError': 107,
    'authFailed': 108,
    'http429': 129,
    'http500': 150,
    'timeout': 160,
    'internalError': 170,
    'baseHardError': 200,
    'notFound': 201,
    'contentFailure': 202,
    'badUsername': 203,
    'badRemoteId': 204,
    'textNotFound': 205,
    'badArgs': 206,
    'contentMissing': 207,
    'titleNotFound': 208,
    'serviceError': 209,
    'torSkipped': 210,
    'torIncompatible': 211,
    'http300': 230,
    'http400': 240,
    'httpOther': 260,
    'emptyJson': 270,
    'deleted': 301,
    'serviceDead': 302,
    'badSignature': 303,
    'badApiUrl': 304,
    'unknownType': 305,
    'noHint': 306,
    'badHintText': 307,
  },
  'ProofType': {
    'none': 0,
    'keybase': 1,
    'twitter': 2,
    'github': 3,
    'reddit': 4,
    'coinbase': 5,
    'hackernews': 6,
    'genericWebSite': 1000,
    'dns': 1001,
    'pgp': 1002,
    'rooter': 100001,
  },
}

export const proveUi = {
  'PromptOverwriteType': {
    'social': 0,
    'site': 1,
  },
}

export const provisionUi = {
  'ProvisionMethod': {
    'device': 0,
    'paperKey': 1,
    'passphrase': 2,
    'gpgImport': 3,
    'gpgSign': 4,
  },
  'GPGMethod': {
    'gpgNone': 0,
    'gpgImport': 1,
    'gpgSign': 2,
  },
  'DeviceType': {
    'desktop': 0,
    'mobile': 1,
  },
  'ChooseType': {
    'existingDevice': 0,
    'newDevice': 1,
  },
}

export const quota = {}

export const rekey = {
  'Outcome': {
    'none': 0,
    'fixed': 1,
    'ignored': 2,
  },
}

export const rekeyUI = {}

export const revoke = {}

export const saltpack = {}

export const saltpackUi = {
  'SaltpackSenderType': {
    'notTracked': 0,
    'unknown': 1,
    'anonymous': 2,
    'trackingBroke': 3,
    'trackingOk': 4,
    'self': 5,
  },
}

export const secretUi = {}

export const SecretKeys = {}

export const session = {}

export const signup = {}

export const sigs = {}

export const streamUi = {}

export const test = {}

export const tlf = {}

export const tlfKeys = {}

export const track = {}

export const ui = {
  'PromptDefault': {
    'none': 0,
    'yes': 1,
    'no': 2,
  },
}

export const user = {}

export default {
  account,
  apiserver,
  backendCommon,
  block,
  BTC,
  chatLocal,
  Common,
  config,
  constants,
  crypto,
  ctl,
  debugging,
  delegateUiCtl,
  device,
  favorite,
  fs,
  gpgCommon,
  gpgUi,
  gregor,
  gregorUI,
  identify,
  identifyCommon,
  identifyUi,
  install,
  kbfs,
  kbfsCommon,
  Kex2Provisionee,
  Kex2Provisioner,
  log,
  logUi,
  login,
  loginUi,
  metadata,
  metadataUpdate,
  NotifyApp,
  notifyCtl,
  NotifyFavorites,
  NotifyFS,
  NotifyKeyfamily,
  NotifyPaperKey,
  NotifyService,
  NotifySession,
  NotifyTracking,
  NotifyUsers,
  paperprovision,
  passphraseCommon,
  pgp,
  pgpUi,
  process,
  prove,
  proveCommon,
  proveUi,
  provisionUi,
  quota,
  rekey,
  rekeyUI,
  revoke,
  saltpack,
  saltpackUi,
  secretUi,
  SecretKeys,
  session,
  signup,
  sigs,
  streamUi,
  test,
  tlf,
  tlfKeys,
  track,
  ui,
  user,
}
