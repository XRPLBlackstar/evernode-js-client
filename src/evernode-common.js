const EvernodeConstants = {
    EVR: 'EVR',
    NFT_PREFIX_HEX: '657672686F7374' // evrhost
}

const MemoTypes = {
    REDEEM: 'evnRedeem',
    REDEEM_ORIGIN: 'evnRedeemOrigin',
    REDEEM_SUCCESS: 'evnRedeemSuccess',
    REDEEM_ERROR: 'evnRedeemError',
    REDEEM_REF: 'evnRedeemRef',
    HOST_REG: 'evnHostReg',
    HOST_DEREG: 'evnHostDereg',
    HEARTBEAT: 'evnHeartbeat'
}

const MemoFormats = {
    TEXT: 'text/plain',
    JSON: 'text/json',
    BASE64: 'base64',
    HEX: 'hex'
}

const ErrorCodes = {
    REDEEM_ERR: 'REDEEM_ERR',
}

const ErrorReasons = {
    TRANSACTION_FAILURE: 'TRANSACTION_FAILURE'
}

// All keys are prefixed with 'EVR' (0x455652)
// Config keys sub-prefix: 0x01
const HookStateKeys = {
    EVR_ISSUER_ADDR: "4556520100000000000000000000000000000000000000000000000000000001",
    FOUNDATION_ADDR: "4556520100000000000000000000000000000000000000000000000000000002",
    MOMENT_SIZE: "4556520100000000000000000000000000000000000000000000000000000001",
    HOST_REG_FEE: "4556520100000000000000000000000000000000000000000000000000000003",
    REDEEM_WINDOW: "4556520100000000000000000000000000000000000000000000000000000005",
    HOST_HEARTBEAT_FREQ: "4556520100000000000000000000000000000000000000000000000000000009",
    MOMENT_BASE_IDX: "4556523400000000000000000000000000000000000000000000000000000000",

    // Prefixes
    PREFIX_HOST_ADDR: "45565203",
    PREFIX_HOST_TOKENID: "45565204"
}

const EvernodeEvents = {
    HostRegistered: "HostRegistered",
    HostDeregistered: "HostDeregistered",
    Redeem: "Redeem",
    RedeemSuccess: "RredeemSuccess",
    RedeemError: "RedeemError",
    Heartbeat: "Heartbeat",
}

module.exports = {
    EvernodeConstants,
    MemoTypes,
    MemoFormats,
    ErrorCodes,
    ErrorReasons,
    HookStateKeys,
    EvernodeEvents
}