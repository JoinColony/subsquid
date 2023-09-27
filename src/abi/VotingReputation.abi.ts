export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "ExtensionInitialised",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LogSetAuthority",
        "inputs": [
            {
                "type": "address",
                "name": "authority",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LogSetOwner",
        "inputs": [
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
        "name": "MetaTransactionExecuted",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": false
            },
            {
                "type": "address",
                "name": "relayerAddress",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "functionSignature",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "motionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "creator",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "domainId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionEscalated",
        "inputs": [
            {
                "type": "uint256",
                "name": "motionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "escalator",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "domainId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "newDomainId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionEventSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "motionId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "eventIndex",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionFinalized",
        "inputs": [
            {
                "type": "uint256",
                "name": "motionId",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "action",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "executed",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionRewardClaimed",
        "inputs": [
            {
                "type": "uint256",
                "name": "motionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "vote",
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
        "name": "MotionStaked",
        "inputs": [
            {
                "type": "uint256",
                "name": "motionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "vote",
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
        "name": "MotionVoteRevealed",
        "inputs": [
            {
                "type": "uint256",
                "name": "motionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "vote",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MotionVoteSubmitted",
        "inputs": [
            {
                "type": "uint256",
                "name": "motionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            }
        ]
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
                "name": ""
            }
        ]
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
                "name": "_user"
            },
            {
                "type": "bytes",
                "name": "_payload"
            },
            {
                "type": "bytes32",
                "name": "_sigR"
            },
            {
                "type": "bytes32",
                "name": "_sigS"
            },
            {
                "type": "uint8",
                "name": "_sigV"
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
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getChainId",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getColony",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getDeprecated",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
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
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setAuthority",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "authority_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOwner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "verify",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            },
            {
                "type": "uint256",
                "name": "_nonce"
            },
            {
                "type": "uint256",
                "name": "_chainId"
            },
            {
                "type": "bytes",
                "name": "_payload"
            },
            {
                "type": "bytes32",
                "name": "_sigR"
            },
            {
                "type": "bytes32",
                "name": "_sigS"
            },
            {
                "type": "uint8",
                "name": "_sigV"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
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
                "name": "_userAddress"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_nonce"
            }
        ]
    },
    {
        "type": "function",
        "name": "identifier",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": "_identifier"
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
                "name": "_version"
            }
        ]
    },
    {
        "type": "function",
        "name": "install",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_colony"
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
                "type": "uint256",
                "name": "_totalStakeFraction"
            },
            {
                "type": "uint256",
                "name": "_voterRewardFraction"
            },
            {
                "type": "uint256",
                "name": "_userMinStakeFraction"
            },
            {
                "type": "uint256",
                "name": "_maxVoteFraction"
            },
            {
                "type": "uint256",
                "name": "_stakePeriod"
            },
            {
                "type": "uint256",
                "name": "_submitPeriod"
            },
            {
                "type": "uint256",
                "name": "_revealPeriod"
            },
            {
                "type": "uint256",
                "name": "_escalationPeriod"
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
        "name": "deprecate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_deprecated"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "uninstall",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "createMotion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_domainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "address",
                "name": "_altTarget"
            },
            {
                "type": "bytes",
                "name": "_action"
            },
            {
                "type": "bytes",
                "name": "_key"
            },
            {
                "type": "bytes",
                "name": "_value"
            },
            {
                "type": "uint256",
                "name": "_branchMask"
            },
            {
                "type": "bytes32[]",
                "name": "_siblings"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "stakeMotion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
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
                "name": "_vote"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "bytes",
                "name": "_key"
            },
            {
                "type": "bytes",
                "name": "_value"
            },
            {
                "type": "uint256",
                "name": "_branchMask"
            },
            {
                "type": "bytes32[]",
                "name": "_siblings"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "submitVote",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
            {
                "type": "bytes32",
                "name": "_voteSecret"
            },
            {
                "type": "bytes",
                "name": "_key"
            },
            {
                "type": "bytes",
                "name": "_value"
            },
            {
                "type": "uint256",
                "name": "_branchMask"
            },
            {
                "type": "bytes32[]",
                "name": "_siblings"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revealVote",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
            {
                "type": "bytes32",
                "name": "_salt"
            },
            {
                "type": "uint256",
                "name": "_vote"
            },
            {
                "type": "bytes",
                "name": "_key"
            },
            {
                "type": "bytes",
                "name": "_value"
            },
            {
                "type": "uint256",
                "name": "_branchMask"
            },
            {
                "type": "bytes32[]",
                "name": "_siblings"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "escalateMotion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
            {
                "type": "uint256",
                "name": "_newDomainId"
            },
            {
                "type": "uint256",
                "name": "_childSkillIndex"
            },
            {
                "type": "bytes",
                "name": "_key"
            },
            {
                "type": "bytes",
                "name": "_value"
            },
            {
                "type": "uint256",
                "name": "_branchMask"
            },
            {
                "type": "bytes32[]",
                "name": "_siblings"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalizeMotion",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "failingExecutionAllowed",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "_allowed"
            }
        ]
    },
    {
        "type": "function",
        "name": "claimReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
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
                "name": "_staker"
            },
            {
                "type": "uint256",
                "name": "_vote"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getTotalStakeFraction",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_fraction"
            }
        ]
    },
    {
        "type": "function",
        "name": "getVoterRewardFraction",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_fraction"
            }
        ]
    },
    {
        "type": "function",
        "name": "getUserMinStakeFraction",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_fraction"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMaxVoteFraction",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_fraction"
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakePeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_period"
            }
        ]
    },
    {
        "type": "function",
        "name": "getSubmitPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_period"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRevealPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_period"
            }
        ]
    },
    {
        "type": "function",
        "name": "getEscalationPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "_period"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMotionCount",
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
        "name": "getMotion",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "_motion",
                "components": [
                    {
                        "type": "uint64[3]",
                        "name": "events"
                    },
                    {
                        "type": "bytes32",
                        "name": "rootHash"
                    },
                    {
                        "type": "uint256",
                        "name": "domainId"
                    },
                    {
                        "type": "uint256",
                        "name": "skillId"
                    },
                    {
                        "type": "uint256",
                        "name": "skillRep"
                    },
                    {
                        "type": "uint256",
                        "name": "repSubmitted"
                    },
                    {
                        "type": "uint256",
                        "name": "paidVoterComp"
                    },
                    {
                        "type": "uint256[2]",
                        "name": "pastVoterComp"
                    },
                    {
                        "type": "uint256[2]",
                        "name": "stakes"
                    },
                    {
                        "type": "uint256[2]",
                        "name": "votes"
                    },
                    {
                        "type": "bool",
                        "name": "escalated"
                    },
                    {
                        "type": "bool",
                        "name": "finalized"
                    },
                    {
                        "type": "address",
                        "name": "altTarget"
                    },
                    {
                        "type": "bytes",
                        "name": "action"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getStake",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
            {
                "type": "address",
                "name": "_staker"
            },
            {
                "type": "uint256",
                "name": "_vote"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_stake"
            }
        ]
    },
    {
        "type": "function",
        "name": "getExpenditureMotionCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_structHash"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_count"
            }
        ]
    },
    {
        "type": "function",
        "name": "getExpenditurePastVote",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_actionHash"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_vote"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMotionState",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": "_motionState"
            }
        ]
    },
    {
        "type": "function",
        "name": "getVoterReward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
            {
                "type": "uint256",
                "name": "_voterRep"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_reward"
            }
        ]
    },
    {
        "type": "function",
        "name": "getVoterRewardRange",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
            {
                "type": "uint256",
                "name": "_voterRep"
            },
            {
                "type": "address",
                "name": "_voterAddress"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_rewardMin"
            },
            {
                "type": "uint256",
                "name": "_rewardMax"
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakerReward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_motionId"
            },
            {
                "type": "address",
                "name": "_staker"
            },
            {
                "type": "uint256",
                "name": "_vote"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "_reward"
            },
            {
                "type": "uint256",
                "name": "_penalty"
            }
        ]
    },
    {
        "type": "function",
        "name": "createClaimDelayAction",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "action"
            },
            {
                "type": "uint256",
                "name": "value"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ]
    }
]
