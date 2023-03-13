import { BanknotesIcon, CreditCardIcon } from '@heroicons/react/24/solid';
import * as React from 'react';

import { Button } from '~/components/Elements/Button';
import { Dialog, DialogTitle } from '~/components/Elements/Dialog';
import { useDisclosure } from '~/hooks/useDisclosure';

export type ConfirmationDialogProps = {
  triggerButton: React.ReactElement;
  isDone?: boolean;
};
export const CheckoutModal = ({
  triggerButton,
  isDone = false,
}: ConfirmationDialogProps) => {
  const { close, open, isOpen } = useDisclosure();

  const addButtonRef = React.useRef(null);

  React.useEffect(() => {
    if (isDone) {
      close();
    }
  }, [isDone, close]);

  const trigger = React.cloneElement(triggerButton, {
    onClick: open,
  });

  return (
    <>
      {trigger}
      <Dialog
        isOpen={isOpen}
        onClose={close}
        initialFocus={addButtonRef}
        className="max-w-lg sm:w-1/2 lg:w-2/5"
      >
        <div className="w-full">
          {/* ICON */}
          <div className="mx-auto mt-3 w-1/2 text-center sm:mt-0 ">
            <DialogTitle
              as="h3"
              className=" text-lg font-medium leading-6 text-gray-900"
            >
              Métodos de pago
            </DialogTitle>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Selecciona el método de pago que prefieras.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col">
            {/* TODO: re-style and extrack to re-usable component */}
            <label className="inline-flex items-center rounded-full  border-gray-200 border-opacity-60 px-2 py-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-600"
                name="paymentMethod"
                value="creditCard"
              />
              <CreditCardIcon className="ml-2 h-6 w-6 text-blue-600" />
              <span className="ml-2 font-light text-gray-700">
                Tarjeta de crédito
              </span>
            </label>

            <label className="mt-4 inline-flex items-center rounded-full border-gray-200 border-opacity-60 px-2 py-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-600"
                name="paymentMethod"
                value="cash"
              />
              <BanknotesIcon className="ml-2 h-6 w-6 text-green-600" />
              <span className="ml-2 font-light text-gray-700">Efectivo</span>
            </label>
          </div>

          <div className="mt-8 w-full">
            <Button
              type="button"
              variant="primary"
              size="lg"
              className="inline-flex w-full justify-center rounded-md border focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 sm:mt-0  sm:text-sm"
              onClick={close}
              ref={addButtonRef}
            >
              Continuar
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};
