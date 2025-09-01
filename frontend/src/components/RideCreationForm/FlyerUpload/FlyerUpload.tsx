import { FileInput } from '@mantine/core';

interface FlyerUploadProps {
  form: any;
}

export function FlyerUpload({ form }: FlyerUploadProps) {
  const handleFileChange = (file: File | null) => {
    if (file) {
      // Validate file type
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'application/pdf',
      ];
      if (!allowedTypes.includes(file.type)) {
        form.setFieldError(
          'flyer',
          'Please upload an image (JPEG, PNG, GIF, WebP) or PDF file'
        );
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        form.setFieldError('flyer', 'File size must be less than 5MB');
        return;
      }

      form.setFieldError('flyer', null);
    }
    form.setFieldValue('flyer', file);
  };

  return (
    <FileInput
      label='Ride Flyer'
      placeholder='Upload flyer image or PDF'
      accept='image/*,.pdf'
      //leftSection={<IconUpload size={16} />}
      value={form.values.flyer}
      onChange={handleFileChange}
      error={form.errors.flyer}
      size='md'
      clearable
      leftSectionPointerEvents='none'
      description='Supports images (JPEG, PNG, GIF, WebP) and PDF files up to 5MB'
    />
  );
}
