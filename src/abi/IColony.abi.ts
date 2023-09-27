export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "Annotation",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "txHash",
                "indexed": true
            },
            {
                "type": "string",
                "name": "metadata",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ArbitraryReputationUpdate",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "address",
                "name": "user",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "skillId",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ArbitraryTransaction",
        "inputs": [
            {
                "type": "address",
                "name": "target",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "data",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "success",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyBootstrapped",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "address[]",
                "name": "users"
            },
            {
                "type": "int256[]",
                "name": "amounts"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyFundsClaimed",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "payoutRemainder",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyFundsMovedBetweenFundingPots",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fromPot",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "toPot",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyInitialised",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "address",
                "name": "colonyNetwork",
                "indexed": false
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyMetadata",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "string",
                "name": "metadata",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyMetadataDelta",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "string",
                "name": "metadata",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyRewardInverseSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "rewardInverse",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyRoleSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "domainId",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "setTo",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyUpgraded",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "oldVersion",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newVersion",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DomainAdded",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "domainId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DomainDeprecated",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "domainId",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "deprecated",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DomainMetadata",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "domainId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "metadata",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureAdded",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureCancelled",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureClaimDelaySet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "slot",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "claimDelay",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureFinalized",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureGlobalClaimDelaySet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "globalClaimDelay",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureLocked",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureMetadataSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "metadata",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditurePayoutModifierSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "slot",
                "indexed": true
            },
            {
                "type": "int256",
                "name": "payoutModifier",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditurePayoutSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "slot",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureRecipientSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "slot",
                "indexed": true
            },
            {
                "type": "address",
                "name": "recipient",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureSkillSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "slot",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "skillId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureStateChanged",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "storageSlot",
                "indexed": true
            },
            {
                "type": "bool[]",
                "name": "mask"
            },
            {
                "type": "bytes32[]",
                "name": "keys"
            },
            {
                "type": "bytes32",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExpenditureTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expenditureId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FundingPotAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "fundingPotId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LocalSkillAdded",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "localSkillId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LocalSkillDeprecated",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "localSkillId",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "deprecated",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MetaTransactionExecuted",
        "inputs": [
            {
                "type": "address",
                "name": "userAddress",
                "indexed": false
            },
            {
                "type": "address",
                "name": "relayerAddress",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "payload",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PaymentAdded",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "paymentId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PaymentFinalized",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "paymentId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PaymentPayoutSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "paymentId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PaymentRecipientSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "paymentId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "recipient",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PaymentSkillSet",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "paymentId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "skillId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PayoutClaimed",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fundingPotId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecoveryModeEntered",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecoveryModeExitApproved",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecoveryModeExited",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecoveryRoleSet",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "setTo",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecoveryStorageSlotSet",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "slot",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "fromValue",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "toValue",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardPayoutClaimed",
        "inputs": [
            {
                "type": "uint256",
                "name": "rewardPayoutId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "user",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "fee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "rewardRemainder",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardPayoutCycleEnded",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "rewardPayoutId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RewardPayoutCycleStarted",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "rewardPayoutId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskAdded",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskBriefSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "specificationHash",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskCanceled",
        "inputs": [
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskChangedViaSignatures",
        "inputs": [
            {
                "type": "address[]",
                "name": "reviewerAddresses"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskCompleted",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskDeliverableSubmitted",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "deliverableHash",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskDueDateSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "dueDate",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskFinalized",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskPayoutSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "role",
                "indexed": false
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskRoleUserSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "role",
                "indexed": false
            },
            {
                "type": "address",
                "name": "user",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskSkillSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "skillId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TaskWorkRatingRevealed",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "taskId",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "role",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "rating",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokenUnlocked",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokensBurned",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokensMinted",
        "inputs": [
            {
                "type": "address",
                "name": "agent",
                "indexed": false
            },
            {
                "type": "address",
                "name": "who",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "approveExitRecovery",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "checkNotAdditionalProtectedVariable",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_slot"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "enterRecoveryMode",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "executeMetaTransaction",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "userAddress"
            },
            {
                "type": "bytes",
                "name": "payload"
            },
            {
                "type": "bytes32",
                "name": "sigR"
            },
            {
                "type": "bytes32",
                "name": "sigS"
            },
            {
                "type": "uint8",
                "name": "sigV"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "exitRecoveryMode",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getMetatransactionNonce",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "userAddress"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "nonce"
            }
        ]
    },
    {
        "type": "function",
        "name": "isInRecoveryMode",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": "inRecoveryMode"
            }
        ]
    },
    {
        "type": "function",
        "name": "multicall",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes[]",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": "results"
            }
        ]
    },
    {
        "type": "function",
        "name": "numRecoveryRoles",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint64",
                "name": "numRoles"
            }
        ]
    },
    {
        "type": "function",
        "name": "removeRecoveryRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRecoveryRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setStorageSlotRecovery",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_slot"
            },
            {
                "type": "bytes32",
                "name": "_value"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "authority",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "colonyAuthority"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "colonyOwner"
            }
        ]
    },
    {
        "type": "function",
        "name": "version",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "colonyVersion"
            }
        ]
    },
    {
        "type": "function",
        "name": "upgrade",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_newVersion"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finishUpgrade",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getColonyNetwork",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "colonyNetwork"
            }
        ]
    },
    {
        "type": "function",
        "name": "getToken",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "tokenAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "makeArbitraryTransaction",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "bytes",
                "name": "_action"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "success"
            }
        ]
    },
    {
        "type": "function",
        "name": "makeArbitraryTransactions",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "_targets"
            },
            {
                "type": "bytes[]",
                "name": "_actions"
            },
            {
                "type": "bool",
                "name": "_strict"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "success"
            }
        ]
    },
    {
        "type": "function",
        "name": "makeSingleArbitraryTransaction",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_target"
            },
            {
                "type": "bytes",
                "name": "_action"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "success"
            }
        ]
    },
    {
        "type": "function",
        "name": "annotateTransaction",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_txHash"
            },
            {
                "type": "string",
                "name": "_metadata"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRootRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "bool",
                "name": "_setTo"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setArbitrationRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "bool",
                "name": "_setTo"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setArchitectureRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "bool",
                "name": "_setTo"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFundingRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "bool",
                "name": "_setTo"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setAdministrationRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "bool",
                "name": "_setTo"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setUserRoles",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "bytes32",
                "name": "_roles"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasUserRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint8",
                "name": "_role"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "hasRole"
            }
        ]
    },
    {
        "type": "function",
        "name": "hasInheritedUserRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint8",
                "name": "_role"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_childDomainId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "hasRole"
            }
        ]
    },
    {
        "type": "function",
        "name": "userCanSetRoles",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_childDomainId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "canSet"
            }
        ]
    },
    {
        "type": "function",
        "name": "getUserRoles",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domain"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "roles"
            }
        ]
    },
    {
        "type": "function",
        "name": "getCapabilityRoles",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "_sig"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "roles"
            }
        ]
    },
    {
        "type": "function",
        "name": "emitDomainReputationReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "int256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitSkillReputationReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_skillId"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "int256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitDomainReputationPenalty",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "int256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitSkillReputationPenalty",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_skillId"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "int256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "initialiseColony",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_colonyNetworkAddress"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "editColony",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_metadata"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "editColonyByDelta",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_metadataDelta"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "bootstrapColony",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "_users"
            },
            {
                "type": "int256[]",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mintTokens",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_wad"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mintTokensFor",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_guy"
            },
            {
                "type": "uint256",
                "name": "_wad"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "lockToken",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "timesLocked"
            }
        ]
    },
    {
        "type": "function",
        "name": "unlockTokenForUser",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "user"
            },
            {
                "type": "uint256",
                "name": "lockId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "registerColonyLabel",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "colonyName"
            },
            {
                "type": "string",
                "name": "orbitdb"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateColonyOrbitDB",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "orbitdb"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "installExtension",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "extensionId"
            },
            {
                "type": "uint256",
                "name": "version"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "upgradeExtension",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "extensionId"
            },
            {
                "type": "uint256",
                "name": "newVersion"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deprecateExtension",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "extensionId"
            },
            {
                "type": "bool",
                "name": "deprecated"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "uninstallExtension",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "extensionId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "initialiseRootLocalSkill",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addLocalSkill",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deprecateLocalSkill",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "localSkillId"
            },
            {
                "type": "bool",
                "name": "deprecated"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getRootLocalSkill",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "rootLocalSkill"
            }
        ]
    },
    {
        "type": "function",
        "name": "addDomain",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_parentDomainId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addDomain",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_parentDomainId"
            },
            {
                "type": "string",
                "name": "_metadata"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "editDomain",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "string",
                "name": "_metadata"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deprecateDomain",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "bool",
                "name": "_deprecated"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getDomain",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "domain",
                "components": [
                    {
                        "type": "uint256",
                        "name": "skillId"
                    },
                    {
                        "type": "uint256",
                        "name": "fundingPotId"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getDomainCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "count"
            }
        ]
    },
    {
        "type": "function",
        "name": "verifyReputationProof",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "key"
            },
            {
                "type": "bytes",
                "name": "value"
            },
            {
                "type": "uint256",
                "name": "branchMask"
            },
            {
                "type": "bytes32[]",
                "name": "siblings"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "isValid"
            }
        ]
    },
    {
        "type": "function",
        "name": "setDefaultGlobalClaimDelay",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_globalClaimDelay"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "makeExpenditure",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "expenditureId"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferExpenditure",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferExpenditureViaArbitration",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelExpenditure",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "lockExpenditure",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalizeExpenditure",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditureMetadata",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "string",
                "name": "_metadata"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditureMetadata",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "string",
                "name": "_metadata"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditureRecipient",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_slot"
            },
            {
                "type": "address",
                "name": "_recipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditureRecipients",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256[]",
                "name": "_slots"
            },
            {
                "type": "address[]",
                "name": "_recipients"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditurePayouts",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256[]",
                "name": "_slots"
            },
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256[]",
                "name": "_amounts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditurePayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_slot"
            },
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditurePayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_slot"
            },
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditureSkill",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_slot"
            },
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditureSkills",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256[]",
                "name": "_slots"
            },
            {
                "type": "uint256[]",
                "name": "_skillIds"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditureClaimDelay",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_slot"
            },
            {
                "type": "uint256",
                "name": "_claimDelay"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditureClaimDelays",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256[]",
                "name": "_slots"
            },
            {
                "type": "uint256[]",
                "name": "_claimDelays"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditurePayoutModifiers",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256[]",
                "name": "_slots"
            },
            {
                "type": "int256[]",
                "name": "_payoutModifiers"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpenditureState",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_storageSlot"
            },
            {
                "type": "bool[]",
                "name": "_mask"
            },
            {
                "type": "bytes32[]",
                "name": "_keys"
            },
            {
                "type": "bytes32",
                "name": "_value"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimExpenditurePayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_slot"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getExpenditureCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "count"
            }
        ]
    },
    {
        "type": "function",
        "name": "getExpenditure",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "expenditure",
                "components": [
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "address",
                        "name": "owner"
                    },
                    {
                        "type": "uint256",
                        "name": "fundingPotId"
                    },
                    {
                        "type": "uint256",
                        "name": "domainId"
                    },
                    {
                        "type": "uint256",
                        "name": "finalizedTimestamp"
                    },
                    {
                        "type": "uint256",
                        "name": "globalClaimDelay"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getExpenditureSlot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_slot"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "expenditureSlot",
                "components": [
                    {
                        "type": "address",
                        "name": "recipient"
                    },
                    {
                        "type": "uint256",
                        "name": "claimDelay"
                    },
                    {
                        "type": "int256",
                        "name": "payoutModifier"
                    },
                    {
                        "type": "uint256[]",
                        "name": "skills"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getExpenditureSlotPayout",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_slot"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "addPayment",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "address",
                "name": "_recipient"
            },
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "paymentId"
            }
        ]
    },
    {
        "type": "function",
        "name": "finalizePayment",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPaymentRecipient",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_recipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPaymentSkill",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPaymentPayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getPayment",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "payment",
                "components": [
                    {
                        "type": "address",
                        "name": "recipient"
                    },
                    {
                        "type": "bool",
                        "name": "finalized"
                    },
                    {
                        "type": "uint256",
                        "name": "fundingPotId"
                    },
                    {
                        "type": "uint256",
                        "name": "domainId"
                    },
                    {
                        "type": "uint256[]",
                        "name": "skills"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "claimPayment",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getPaymentCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "count"
            }
        ]
    },
    {
        "type": "function",
        "name": "makeTask",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "bytes32",
                "name": "_specificationHash"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_skillId"
            },
            {
                "type": "uint256",
                "name": "_dueDate"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getTaskCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "count"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTaskChangeNonce",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "nonce"
            }
        ]
    },
    {
        "type": "function",
        "name": "executeTaskChange",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8[]",
                "name": "_sigV"
            },
            {
                "type": "bytes32[]",
                "name": "_sigR"
            },
            {
                "type": "bytes32[]",
                "name": "_sigS"
            },
            {
                "type": "uint8[]",
                "name": "_mode"
            },
            {
                "type": "uint256",
                "name": "_value"
            },
            {
                "type": "bytes",
                "name": "_data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "executeTaskRoleAssignment",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8[]",
                "name": "_sigV"
            },
            {
                "type": "bytes32[]",
                "name": "_sigR"
            },
            {
                "type": "bytes32[]",
                "name": "_sigS"
            },
            {
                "type": "uint8[]",
                "name": "_mode"
            },
            {
                "type": "uint256",
                "name": "_value"
            },
            {
                "type": "bytes",
                "name": "_data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitTaskWorkRating",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint8",
                "name": "_role"
            },
            {
                "type": "bytes32",
                "name": "_ratingSecret"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revealTaskWorkRating",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint8",
                "name": "_role"
            },
            {
                "type": "uint8",
                "name": "_rating"
            },
            {
                "type": "bytes32",
                "name": "_salt"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "generateSecret",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_salt"
            },
            {
                "type": "uint256",
                "name": "_value"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "secret"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTaskWorkRatingSecretsInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "nSecrets"
            },
            {
                "type": "uint256",
                "name": "lastSubmittedAt"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTaskWorkRatingSecret",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint8",
                "name": "_role"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "secret"
            }
        ]
    },
    {
        "type": "function",
        "name": "setTaskManagerRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTaskEvaluatorRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTaskWorkerRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "removeTaskEvaluatorRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "removeTaskWorkerRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTaskSkill",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTaskBrief",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "bytes32",
                "name": "_specificationHash"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTaskDueDate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint256",
                "name": "_dueDate"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitTaskDeliverable",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "bytes32",
                "name": "_deliverableHash"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitTaskDeliverableAndRating",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "bytes32",
                "name": "_deliverableHash"
            },
            {
                "type": "bytes32",
                "name": "_ratingSecret"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalizeTask",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "cancelTask",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "completeTask",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getTask",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "specificationHash"
            },
            {
                "type": "bytes32",
                "name": "deliverableHash"
            },
            {
                "type": "uint8",
                "name": "status"
            },
            {
                "type": "uint256",
                "name": "dueDate"
            },
            {
                "type": "uint256",
                "name": "fundingPotId"
            },
            {
                "type": "uint256",
                "name": "completionTimestamp"
            },
            {
                "type": "uint256",
                "name": "domainId"
            },
            {
                "type": "uint256[]",
                "name": "skillIds"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTaskRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint8",
                "name": "_role"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "role",
                "components": [
                    {
                        "type": "address",
                        "name": "user"
                    },
                    {
                        "type": "bool",
                        "name": "rateFail"
                    },
                    {
                        "type": "uint8",
                        "name": "rating"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "setRewardInverse",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_rewardInverse"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getRewardInverse",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "rewardInverse"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTaskPayout",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint8",
                "name": "_role"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "setTaskManagerPayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTaskEvaluatorPayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTaskWorkerPayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setAllTaskPayouts",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "uint256",
                "name": "_managerAmount"
            },
            {
                "type": "uint256",
                "name": "_evaluatorAmount"
            },
            {
                "type": "uint256",
                "name": "_workerAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimTaskPayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "uint8",
                "name": "_role"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "startNextRewardPayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "bytes",
                "name": "key"
            },
            {
                "type": "bytes",
                "name": "value"
            },
            {
                "type": "uint256",
                "name": "branchMask"
            },
            {
                "type": "bytes32[]",
                "name": "siblings"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimRewardPayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_payoutId"
            },
            {
                "type": "uint256[7]",
                "name": "_squareRoots"
            },
            {
                "type": "bytes",
                "name": "key"
            },
            {
                "type": "bytes",
                "name": "value"
            },
            {
                "type": "uint256",
                "name": "branchMask"
            },
            {
                "type": "bytes32[]",
                "name": "siblings"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getRewardPayoutInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_payoutId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "rewardPayoutCycle",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "reputationState"
                    },
                    {
                        "type": "uint256",
                        "name": "colonyWideReputation"
                    },
                    {
                        "type": "uint256",
                        "name": "totalTokens"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "address",
                        "name": "tokenAddress"
                    },
                    {
                        "type": "uint256",
                        "name": "blockTimestamp"
                    },
                    {
                        "type": "uint256",
                        "name": "amountRemaining"
                    },
                    {
                        "type": "bool",
                        "name": "finalized"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "finalizeRewardPayout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_payoutId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getFundingPot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": "associatedType"
            },
            {
                "type": "uint256",
                "name": "associatedTypeId"
            },
            {
                "type": "uint256",
                "name": "payoutsWeCannotMake"
            }
        ]
    },
    {
        "type": "function",
        "name": "getFundingPotCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "count"
            }
        ]
    },
    {
        "type": "function",
        "name": "getFundingPotBalance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_potId"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "balance"
            }
        ]
    },
    {
        "type": "function",
        "name": "getFundingPotPayout",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_potId"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "payout"
            }
        ]
    },
    {
        "type": "function",
        "name": "moveFundsBetweenPots",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_fromChildSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_toChildSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_fromPot"
            },
            {
                "type": "uint256",
                "name": "_toPot"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "moveFundsBetweenPots",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_fromChildSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_toChildSkillIndex"
            },
            {
                "type": "uint256",
                "name": "_fromPot"
            },
            {
                "type": "uint256",
                "name": "_toPot"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimColonyFunds",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getNonRewardPotsTotal",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "approveStake",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_approvee"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "obligateStake",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deobligateStake",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferStake",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_permissionDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "address",
                "name": "_obligator"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "address",
                "name": "_recipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getApproval",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "address",
                "name": "_obligator"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "approval"
            }
        ]
    },
    {
        "type": "function",
        "name": "getObligation",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "address",
                "name": "_obligator"
            },
            {
                "type": "uint256",
                "name": "_domainId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "obligation"
            }
        ]
    },
    {
        "type": "function",
        "name": "getDomainFromFundingPot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_fundingPotId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "domainId"
            }
        ]
    },
    {
        "type": "function",
        "name": "burnTokens",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unlockToken",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateApprovalAmount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "address",
                "name": "spender"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getTokenApproval",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "address",
                "name": "spender"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTotalTokenApproval",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DomainAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "domainId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyUpgraded",
        "inputs": [
            {
                "type": "uint256",
                "name": "oldVersion",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newVersion",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyRoleSet",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "domainId",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "setTo",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokenUnlocked",
        "inputs": []
    }
]
