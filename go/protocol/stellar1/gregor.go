// Auto-generated by avdl-compiler v1.3.22 (https://github.com/keybase/node-avdl-compiler)
//   Input file: avdl/stellar1/gregor.avdl

package stellar1

import (
	"github.com/keybase/go-framed-msgpack-rpc/rpc"
)

type GmAutoClaim struct {
	KbTxID       KeybaseTransactionID `codec:"kbTxID" json:"kbTxID"`
	KnownCounter int                  `codec:"knownCounter" json:"knownCounter"`
}

func (o GmAutoClaim) DeepCopy() GmAutoClaim {
	return GmAutoClaim{
		KbTxID:       o.KbTxID.DeepCopy(),
		KnownCounter: o.KnownCounter,
	}
}

type GregorInterface interface {
}

func GregorProtocol(i GregorInterface) rpc.Protocol {
	return rpc.Protocol{
		Name:    "stellar.1.gregor",
		Methods: map[string]rpc.ServeHandlerDescription{},
	}
}

type GregorClient struct {
	Cli rpc.GenericClient
}
