export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "AuctionCreated",
        "inputs": [
            {
                "type": "address",
                "name": "auction",
                "indexed": false
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "quantity",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "colonyId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "colonyAddress",
                "indexed": true
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
        "name": "ColonyLabelRegistered",
        "inputs": [
            {
                "type": "address",
                "name": "colony",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "label",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyNetworkInitialised",
        "inputs": [
            {
                "type": "address",
                "name": "resolver",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ColonyVersionAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "version",
                "indexed": false
            },
            {
                "type": "address",
                "name": "resolver",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExtensionAddedToNetwork",
        "inputs": [
            {
                "type": "bytes32",
                "name": "extensionId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExtensionDeprecated",
        "inputs": [
            {
                "type": "bytes32",
                "name": "extensionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "colony",
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
        "name": "ExtensionInstalled",
        "inputs": [
            {
                "type": "bytes32",
                "name": "extensionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "colony",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExtensionUninstalled",
        "inputs": [
            {
                "type": "bytes32",
                "name": "extensionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "colony",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExtensionUpgraded",
        "inputs": [
            {
                "type": "bytes32",
                "name": "extensionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "colony",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MetaColonyCreated",
        "inputs": [
            {
                "type": "address",
                "name": "metaColony",
                "indexed": false
            },
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "rootSkillId",
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
        "name": "MiningCycleResolverSet",
        "inputs": [
            {
                "type": "address",
                "name": "miningCycleResolver",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NetworkFeeInverseSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "feeInverse",
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
        "name": "RegistrarInitialised",
        "inputs": [
            {
                "type": "address",
                "name": "ens",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "rootNode",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReputationMinerPenalised",
        "inputs": [
            {
                "type": "address",
                "name": "miner",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "tokensLost",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReputationMiningCycleComplete",
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "nLeaves",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReputationMiningInitialised",
        "inputs": [
            {
                "type": "address",
                "name": "inactiveReputationMiningCycle",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ReputationMiningRewardSet",
        "inputs": [
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
        "name": "ReputationRootHashSet",
        "inputs": [
            {
                "type": "bytes32",
                "name": "newHash",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newNLeaves",
                "indexed": false
            },
            {
                "type": "address[]",
                "name": "stakers"
            },
            {
                "type": "uint256",
                "name": "reward",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SkillAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "skillId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "parentSkillId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokenAuthorityDeployed",
        "inputs": [
            {
                "type": "address",
                "name": "tokenAuthorityAddress",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokenDeployed",
        "inputs": [
            {
                "type": "address",
                "name": "tokenAddress",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokenLockingAddressSet",
        "inputs": [
            {
                "type": "address",
                "name": "tokenLocking",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TokenWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "status",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UserLabelRegistered",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "label",
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
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "_interfaceID"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "_status"
            }
        ]
    },
    {
        "type": "function",
        "name": "setReplacementReputationUpdateLogEntry",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_reputationMiningCycle"
            },
            {
                "type": "uint256",
                "name": "_id"
            },
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "int256",
                "name": "_amount"
            },
            {
                "type": "uint256",
                "name": "_skillId"
            },
            {
                "type": "address",
                "name": "_colony"
            },
            {
                "type": "uint128",
                "name": "_nUpdates"
            },
            {
                "type": "uint128",
                "name": "_nPreviousUpdates"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getReplacementReputationUpdateLogEntry",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_reputationMiningCycle"
            },
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "_reputationLogEntry",
                "components": [
                    {
                        "type": "address",
                        "name": "user"
                    },
                    {
                        "type": "int256",
                        "name": "amount"
                    },
                    {
                        "type": "uint256",
                        "name": "skillId"
                    },
                    {
                        "type": "address",
                        "name": "colony"
                    },
                    {
                        "type": "uint128",
                        "name": "nUpdates"
                    },
                    {
                        "type": "uint128",
                        "name": "nPreviousUpdates"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getReplacementReputationUpdateLogsExist",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_reputationMiningCycle"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "_exists"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMetaColony",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "_colonyAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "getColonyCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_count"
            }
        ]
    },
    {
        "type": "function",
        "name": "isColony",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_colony"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "_addressIsColony"
            }
        ]
    },
    {
        "type": "function",
        "name": "addSkill",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_parentSkillId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ]
    },
    {
        "type": "function",
        "name": "getSkill",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "_skill",
                "components": [
                    {
                        "type": "uint128",
                        "name": "nParents"
                    },
                    {
                        "type": "uint128",
                        "name": "nChildren"
                    },
                    {
                        "type": "uint256[]",
                        "name": "parents"
                    },
                    {
                        "type": "uint256[]",
                        "name": "children"
                    },
                    {
                        "type": "bool",
                        "name": "globalSkill"
                    },
                    {
                        "type": "bool",
                        "name": "deprecated"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "deprecateSkill",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deprecateSkill",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_skillId"
            },
            {
                "type": "bool",
                "name": "_deprecated"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "_changed"
            }
        ]
    },
    {
        "type": "function",
        "name": "initialiseRootLocalSkill",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_rootLocalSkillId"
            }
        ]
    },
    {
        "type": "function",
        "name": "appendReputationUpdateLog",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "int256",
                "name": "_amount"
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
        "name": "getSkillCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_count"
            }
        ]
    },
    {
        "type": "function",
        "name": "getReputationMiningSkillId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_skillId"
            }
        ]
    },
    {
        "type": "function",
        "name": "setTokenLocking",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_tokenLockingAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getTokenLocking",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "_lockingAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "createMetaColony",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_tokenAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "createColony",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_tokenAddress"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_colonyAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "createColony",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_tokenAddress"
            },
            {
                "type": "uint256",
                "name": "_version"
            },
            {
                "type": "string",
                "name": "_colonyName"
            },
            {
                "type": "string",
                "name": "_metadata"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_colonyAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "createColony",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_tokenAddress"
            },
            {
                "type": "uint256",
                "name": "_version"
            },
            {
                "type": "string",
                "name": "_colonyName"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_colonyAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "createColony",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_tokenAddress"
            },
            {
                "type": "uint256",
                "name": "_version"
            },
            {
                "type": "string",
                "name": "_colonyName"
            },
            {
                "type": "string",
                "name": "_orbitdb"
            },
            {
                "type": "bool",
                "name": "_useExtensionManager"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_colonyAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "createColonyForFrontend",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_tokenAddress"
            },
            {
                "type": "string",
                "name": "_name"
            },
            {
                "type": "string",
                "name": "_symbol"
            },
            {
                "type": "uint8",
                "name": "_decimals"
            },
            {
                "type": "uint256",
                "name": "_version"
            },
            {
                "type": "string",
                "name": "_colonyName"
            },
            {
                "type": "string",
                "name": "_metadata"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "address",
                "name": "colony"
            }
        ]
    },
    {
        "type": "function",
        "name": "addColonyVersion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_version"
            },
            {
                "type": "address",
                "name": "_resolver"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "initialise",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_resolver"
            },
            {
                "type": "uint256",
                "name": "_version"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getColony",
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
                "type": "address",
                "name": "_colonyAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentColonyVersion",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_version"
            }
        ]
    },
    {
        "type": "function",
        "name": "getParentSkillId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_skillId"
            },
            {
                "type": "uint256",
                "name": "_parentSkillIndex"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_parentSkillId"
            }
        ]
    },
    {
        "type": "function",
        "name": "getChildSkillId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_skillId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_childSkillId"
            }
        ]
    },
    {
        "type": "function",
        "name": "getReputationMiningCycle",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_active"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_repMiningCycleAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "calculateMinerWeight",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_timeStaked"
            },
            {
                "type": "uint256",
                "name": "_submissonIndex"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_minerWeight"
            }
        ]
    },
    {
        "type": "function",
        "name": "getColonyVersionResolver",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_version"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_resolverAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "setReputationRootHash",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_newHash"
            },
            {
                "type": "uint256",
                "name": "_newNLeaves"
            },
            {
                "type": "address[]",
                "name": "_stakers"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "startNextCycle",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "initialiseReputationMining",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getReputationRootHash",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": "rootHash"
            }
        ]
    },
    {
        "type": "function",
        "name": "getReputationRootHashNLeaves",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "nLeaves"
            }
        ]
    },
    {
        "type": "function",
        "name": "getReputationRootHashNNodes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "nNodes"
            }
        ]
    },
    {
        "type": "function",
        "name": "startTokenAuction",
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
        "name": "setupRegistrar",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_ens"
            },
            {
                "type": "bytes32",
                "name": "_rootNode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "registerUserLabel",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_username"
            },
            {
                "type": "string",
                "name": "_orbitdb"
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
                "name": "_colonyName"
            },
            {
                "type": "string",
                "name": "_orbitdb"
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
                "name": "_orbitdb"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateUserOrbitDB",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_orbitdb"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getProfileDBAddress",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_node"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": "_orbitdb"
            }
        ]
    },
    {
        "type": "function",
        "name": "lookupRegisteredENSDomain",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": "_domain"
            }
        ]
    },
    {
        "type": "function",
        "name": "addr",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_node"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ]
    },
    {
        "type": "function",
        "name": "getENSRegistrar",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ]
    },
    {
        "type": "function",
        "name": "setMiningResolver",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_miningResolverAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getMiningResolver",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "miningResolverAddress"
            }
        ]
    },
    {
        "type": "function",
        "name": "addExtensionToNetwork",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_extensionId"
            },
            {
                "type": "address",
                "name": "_resolver"
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
                "name": "_extensionId"
            },
            {
                "type": "uint256",
                "name": "_version"
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
                "name": "_extensionId"
            },
            {
                "type": "uint256",
                "name": "_newVersion"
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
                "name": "_extensionId"
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
        "name": "uninstallExtension",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_extensionId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getExtensionResolver",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_extensionId"
            },
            {
                "type": "uint256",
                "name": "_version"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_resolver"
            }
        ]
    },
    {
        "type": "function",
        "name": "getExtensionInstallation",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_extensionId"
            },
            {
                "type": "address",
                "name": "_colony"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_installation"
            }
        ]
    },
    {
        "type": "function",
        "name": "getFeeInverse",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_feeInverse"
            }
        ]
    },
    {
        "type": "function",
        "name": "setFeeInverse",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_feeInverse"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getPayoutWhitelist",
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
                "type": "bool",
                "name": "_status"
            }
        ]
    },
    {
        "type": "function",
        "name": "setPayoutWhitelist",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "bool",
                "name": "_status"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "punishStakers",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "_stakers"
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
        "name": "stakeForMining",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unstakeForMining",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getMiningStake",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "_info",
                "components": [
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "uint256",
                        "name": "timestamp"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "reward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_recipient"
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
        "name": "burnUnneededRewards",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimMiningReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_recipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setReputationMiningCycleReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getReputationMiningCycleReward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "deployTokenViaNetwork",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_name"
            },
            {
                "type": "string",
                "name": "_symbol"
            },
            {
                "type": "uint8",
                "name": "_decimals"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_token"
            }
        ]
    },
    {
        "type": "function",
        "name": "deployTokenAuthority",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "address",
                "name": "_colony"
            },
            {
                "type": "address[]",
                "name": "_allowedToTransfer"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_tokenAuthority"
            }
        ]
    },
    {
        "type": "function",
        "name": "setMiningDelegate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_delegate"
            },
            {
                "type": "bool",
                "name": "_allowed"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getMiningDelegator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_delegate"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "_delegator"
            }
        ]
    }
]
