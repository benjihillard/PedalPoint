export const validateMeetTime = (value: Date | string | null) => {
  if (!value) return 'Meet time is required';
  const now = new Date();
  const meetTime = new Date(value);
  if (meetTime <= now) return 'Meet time must be in the future';
  return null;
};

export const validateWheelsDownTime = (
  value: Date | string | null,
  meetTime?: Date | string | null
) => {
  if (!value) return 'Wheels down time is required';
  if (!meetTime) return null; // Skip validation if meetTime not set
  const wheelsDown = new Date(value);
  const meetTimeDate = new Date(meetTime);
  if (wheelsDown <= meetTimeDate) return 'Wheels down must be after meet time';
  return null;
};

export const validateEndTime = (
  value: Date | string | null,
  wheelsDownTime?: Date | string | null
) => {
  if (!value) return 'End time is required';
  if (!wheelsDownTime) return null; // Skip validation if wheelsDownTime not set
  const endTime = new Date(value);
  const wheelsDown = new Date(wheelsDownTime);
  if (endTime <= wheelsDown) return 'End time must be after wheels down time';
  return null;
};
