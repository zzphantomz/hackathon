"use client";
var Web3 = require('web3');
import BigDecimal from 'js-big-decimal'

import {VRC25ABI} from "./VRC25ABI"

const client = new Web3(new Web3.providers.HttpProvider("https://rpc.tomochain.com",{}))
const addressToken = "0xFD5B85047Bf7785D09C900a9876bdbfB89395fBc"


const contractToken = new client.eth.Contract(VRC25ABI, addressToken)


function rawToHuman(balance, decimals = 18) {
    try {
        if (!['number', 'string', 'bigint'].includes(typeof balance) || parseFloat(balance) === 0) {
            return 0
        }
        const fmtDecimals = parseFloat(decimals)
        const multiplyNum = new BigDecimal(Math.pow(10, fmtDecimals))
        const convertValue = new BigDecimal(balance)
        return convertValue.divide(multiplyNum, fmtDecimals).round(decimals, BigDecimal.RoundingModes.DOWN).getValue()
    } catch (error) {
        return 0
    }
}


export const getBalance = async (address) => {
    const balance = await contractToken.methods.balanceOf(address).call()
    console.log(balance)
    return Number(rawToHuman(balance,18))
}



