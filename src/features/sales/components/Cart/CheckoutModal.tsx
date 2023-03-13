import {
  ShieldExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import * as React from 'react';

import { Button } from '~/components/Elements/Button';
import { Dialog, DialogTitle } from '~/components/Elements/Dialog';
import { useDisclosure } from '~/hooks/useDisclosure';

export type ConfirmationDialogProps = {
  triggerButton: React.ReactElement;
  title: string;
  isDone?: boolean;
  body?: React.ReactElement;
};
export const CheckoutModal = ({
  triggerButton,
  title,
  isDone = false,
  body,
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
      <Dialog isOpen={isOpen} onClose={close} initialFocus={addButtonRef}>
        <div className="sm:flex sm:items-start">
          {/* ICON */}
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <DialogTitle
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              {title}
            </DialogTitle>
            <div className="mt-2">hello</div>
          </div>
        </div>

        <div className="mt-4 flex justify-end space-x-2">
          <Button
            type="button"
            variant="primary"
            className="inline-flex w-full justify-center rounded-md border focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={close}
            ref={addButtonRef}
          >
            Pay
          </Button>
        </div>
      </Dialog>
    </>
  );
};
